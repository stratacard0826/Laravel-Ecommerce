<?php 
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class ForumThread extends Model
{

    /**
     * Eloquent attributes
     */
    protected $table = 'forum_threads';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['category_id', 'author_id', 'content', 'title', 'locked', 'pinned', 'reply_count'];

    /**
     * @var string
     */
    const STATUS_UNREAD = 'unread';

    /**
     * @var string
     */
    const STATUS_UPDATED = 'updated';

    /**
     * Create a new thread model instance.
     *
     * @param  array  $attributes
     */
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        $this->perPage = config('forum.preferences.pagination.threads');
    }

    /**
     * Relationship: Category.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(ForumCategory::class);
    }

    /**
     * Relationship: Readers.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function readers()
    {
        return $this->belongsToMany(
            config('forum.integration.user_model'),
            'forum_threads_read',
            'thread_id',
            'user_id'
        )->withTimestamps();
    }
    
    public function slug($string){
        return strtolower(trim(preg_replace('~[^0-9a-z]+~i', '-', html_entity_decode(preg_replace('~&([a-z]{1,2})(?:acute|cedil|circ|grave|lig|orn|ring|slash|th|tilde|uml);~i', '$1', htmlentities($string, ENT_QUOTES, 'UTF-8')), ENT_QUOTES, 'UTF-8')), '-'));
    }
    
    public function getThreads($category_id){
        
        $threads = \DB::table('forum_threads as t1')
                     ->leftJoin('forum_categories as t2', 't1.category_id', '=', 't2.id')
                     ->leftJoin('forum_categories as t3', 't2.category_id', '=', 't3.id')
                     ->leftJoin('forum_threads_read as t4', 't1.id', '=', 't4.thread_id')
                     ->leftJoin('users as t5', 't1.author_id', '=', 't5.id')
                     ->join('forum_categories as t6', 't1.category_id', '=', 't6.id')
                     ->whereRaw("t6.category_id = '{$category_id}' or t1.category_id='{$category_id}' " )
                     ->groupBy('t1.id')
                     ->orderBy('t1.created_at', 'desc')
                     ->select('t1.*', 't2.title as categoryTitle', 't3.title as parentCategoryTitle', \DB::raw('count(t4.id) as viewCount'), 't5.name as authorName')
                     ->get()
        ;
        foreach($threads as $thread){
            $thread->permalink = $this->slug($thread->title);
            $thread->postTime = Carbon::createFromTimestamp(strtotime($thread->created_at))->diffForHumans();
            $thread->authorName = is_array(explode(" ", $thread->authorName)) ? explode(" ", $thread->authorName)[0] : $thread->authorName;
        }
        
        return $threads;
    }
    
    public function getThread($thread_id){
        $thread = \DB::table('forum_threads as t1')
                     ->leftJoin('forum_categories as t2', 't1.category_id', '=', 't2.id')
                     ->leftJoin('forum_categories as t3', 't2.category_id', '=', 't3.id')
                     ->leftJoin('forum_threads_read as t4', 't1.id', '=', 't4.thread_id')
                     ->leftJoin('users as t5', 't1.author_id', '=', 't5.id')
                     ->where('t1.id', $thread_id)
                     ->groupBy('t1.id')
                     ->orderBy('t1.created_at', 'desc')
                     ->select('t1.*', 't2.title as categoryTitle', 't3.title as parentCategoryTitle', \DB::raw('count(t4.id) as viewCount'), 't5.name as authorName')
                     ->first()
        ;
        $thread->postTime = Carbon::createFromTimestamp(strtotime($thread->created_at))->diffForHumans();
        $thread->authorName = is_array(explode(" ", $thread->authorName)) ? explode(" ", $thread->authorName)[0] : $thread->authorName;

        return $thread;
    }

    /**
     * Relationship: Posts.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function posts()
    {
        $withTrashed = config('forum.preferences.display_trashed_posts') || Gate::allows('viewTrashedPosts');
        $query = $this->hasMany(Post::class);
        return $withTrashed ? $query->withTrashed() : $query;
    }

    /**
     * Scope: Recent threads.
     *
     * @param  \Illuminate\Database\Query\Builder  $query
     * @return \Illuminate\Database\Query\Builder
     */
    public function scopeRecent($query)
    {
        $time = time();
        $age = strtotime(config('forum.preferences.old_thread_threshold'), 0);
        $cutoff = $time - $age;

        return $query->where('updated_at', '>', date('Y-m-d H:i:s', $cutoff))->orderBy('updated_at', 'desc');
    }

    /**
     * Attribute: Paginated posts.
     *
     * @return \Illuminate\Pagination\LengthAwarePaginator
     */
    public function getPostsPaginatedAttribute()
    {
        return $this->posts()->paginate(config('forum.preferences.pagination.posts'));
    }

    /**
     * Attribute: The last page number of the thread.
     *
     * @return int
     */
    public function getLastPageAttribute()
    {
        return $this->postsPaginated->lastPage();
    }

    /**
     * Attribute: The first post in the thread.
     *
     * @return Post
     */
    public function getFirstPostAttribute()
    {
        return $this->posts()->orderBy('created_at', 'asc')->first();
    }

    /**
     * Attribute: The last post in the thread.
     *
     * @return Post
     */
    public function getLastPostAttribute()
    {
        return $this->posts()->orderBy('created_at', 'desc')->first();
    }

    /**
     * Attribute: Creation time of the last post in the thread.
     *
     * @return \Carbon\Carbon
     */
    public function getLastPostTimeAttribute()
    {
        return $this->lastPost->created_at;
    }


    /**
     * Attribute: 'Old' flag.
     *
     * @return boolean
     */
    public function getOldAttribute()
    {
        $age = config('forum.preferences.old_thread_threshold');
        return (!$age || $this->updated_at->timestamp < (time() - strtotime($age, 0)));
    }

    /**
     * Attribute: Currently authenticated reader.
     *
     * @return mixed
     */
    public function getReaderAttribute()
    {
        if (auth()->check()) {
            $reader = $this->readers()->where('user_id', auth()->user()->getKey())->first();

            return (!is_null($reader)) ? $reader->pivot : null;
        }

        return null;
    }

    /**
     * Attribute: Read/unread/updated status for current reader.
     *
     * @return mixed
     */
    public function getUserReadStatusAttribute()
    {
        if (!$this->old && auth()->check()) {
            if (is_null($this->reader)) {
                return self::STATUS_UNREAD;
            }

            return ($this->updatedSince($this->reader)) ? self::STATUS_UPDATED : false;
        }

        return false;
    }

    /**
     * Helper: Mark this thread as read for the given user ID.
     *
     * @param  int  $userID
     * @return void
     */
    public function markAsRead($userID)
    {
        if (!$this->old) {
            if (is_null($this->reader)) {
                $this->readers()->attach($userID);
            } elseif ($this->updatedSince($this->reader)) {
                $this->reader->touch();
            }
        }

        return $this;
    }
}
