<?php 
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ForumThreadRead extends Model
{

    /**
     * Eloquent attributes
     */
    protected $table = 'forum_threads_read';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['thread_id', 'user_id'];
    
    public function add($data){
        if(!$data['user_id'])
            return;
        $threds_read = $this->where('user_id', $data['user_id'])
            ->where('thread_id', $data['thread_id'])
            ->first();
        if(!$threds_read){
            $this->create($data);
        }
    }

}
