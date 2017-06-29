<?php 
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class ForumPost extends Model
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'forum_posts';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
    protected $fillable = ['thread_id', 'author_id', 'post_id', 'content'];

    /**
     * Create a new post model instance.
     *
     * @param  array  $attributes
     */
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        $this->setPerPage(config('forum.preferences.pagination.posts'));
    }

    /**
     * Relationship: Thread.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function thread()
    {
        return $this->belongsTo(Thread::class)->withTrashed();
    }

    /**
     * Relationship: Parent post.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function parent()
    {
        return $this->belongsTo(Post::class, 'post_id');
    }

    /**
     * Relationship: Child posts.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function children()
    {
        return $this->hasMany(Post::class, 'post_id')->withTrashed();
    }

    /**
     * Attribute: First post flag.
     *
     * @return boolean
     */
    public function getIsFirstAttribute()
    {
        return $this->id == $this->thread->firstPost->id;
    }

    /**
     * Helper: Sequence number in thread.
     *
     * @return int
     */
    public function getSequenceNumber()
    {
        foreach ($this->thread->posts as $index => $post) {
            if ($post->id == $this->id) {
                return $index + 1;
            }
        }
    }
    
    public function getPosts($thread_id){

        $threadModel = new ForumThread;
        $userModel = new User;
        $thread = $threadModel->getThread($thread_id);
        $author = $userModel->getUserById($thread->author_id);
        $thread->author = $author;
        $thread->authorPicture = $author->medias[0]->media_link;
        // print_r($thread);exit;
        
        $posts = \DB::table('forum_posts as t1')
                ->leftJoin('users as t2', 't1.author_id', '=', 't2.id')
                ->where('t1.thread_id', $thread_id)
                ->orderBy('t1.created_at', 'desc')
                ->select('t1.*')
                ->get();
        foreach($posts as $post){
            $author = $userModel->getUserById($post->author_id);
//            $post->authorName = $author->name;
            $post->authorName = is_array(explode(" ", $author->name)) ? explode(" ", $author->name)[0] : $author->name;
            $post->authorPicture = $author->medias[0]->media_link;
            $post->postTime = Carbon::createFromTimestamp(strtotime($post->created_at))->diffForHumans();
        }
        $results = array();
        $this->makeHierachPosts($posts, $results, 0);
        $thread->posts = $results;
        // print_r($thread);exit;
        return $thread;
    }
    
    public function makeHierachPosts($posts, &$results, $parent){
        foreach($posts as $post){
            if(intval($post->post_id)  == $parent){
                array_push($results, $post);
                $post->child_posts = array();
                $this->makeHierachPosts($posts, $post->child_posts, $post->id);
            }
        }
    }
}
