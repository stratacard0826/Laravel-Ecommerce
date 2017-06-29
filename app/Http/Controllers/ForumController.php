<?php

namespace App\Http\Controllers;

use App\Models\ForumCategory;
use App\Models\ForumThread;
use App\Models\ForumThreadRead;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Carbon\Carbon;

class ForumController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     */

    public function __construct()
    {
        $this->authCheck = $this->RequestAuthentication(array('admin', 'editor', 'user'));   
        $this->userData = $this->authCheck;

        if ($this->authCheck['method-status'] == 'success-with-http' || $this->authCheck['method-status'] == 'success-with-ajax') {
            $this->userData = $this->authCheck['user-data'];
        }

        //check user authentication and get user basic information
        $this->categoryModel = new ForumCategory;
        $this->threadModel = new ForumThread;
        $this->threadReadModel = new ForumThreadRead;
    }
    public function getCategories(){
        $categories = $this->categoryModel->where('category_id', 0)->get();
        foreach($categories as $category){
            $category['sub_categories'] = $this->categoryModel->where('category_id', $category->id)->get();
        }
        return $categories;
    }

    public function index()
    {
        $categories = $this->getCategories();
        $params = array(
            'categories' => $categories,
            'userData' => $this->userData,
        );
//        return view('forum.index')->with($params);
        return \View::make('forum.index', $params);
    }

    public function thread($id, $threadlink){

        $this->threadReadModel->add(
            array(
                'thread_id' => $id,
                'user_id' => $this->userData->id,
            )
        );
        return view('forum.thread')->with('id', $id);
    }


}
