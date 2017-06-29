<?php

namespace App\Http\Controllers;

use App\Models\ForumCategory;
use App\Models\ForumThread;
use App\Models\ForumPost;

use App\Models\WpPost;
use Illuminate\Http\Request;

use App\Http\Requests;
use Carbon\Carbon;


class ForumApiController extends ApiController
{
    public function __construct()
    {
        $this->categoryModel = new ForumCategory;
        $this->threadModel = new ForumThread;
        $this->postModel = new ForumPost;
        /**
        * put your comment there...
        * 
        * @var ForumApiController
        */
        $this->authCheck = $this->RequestAuthentication(array('admin', 'editor', 'user'));   
        $this->userData = $this->authCheck;

        if ($this->authCheck['method-status'] == 'success-with-http' || $this->authCheck['method-status'] == 'success-with-ajax') {
            $this->userData = $this->authCheck['user-data'];
        }
        /************/
    }
    
    public function getCategories($id=0){
        $categories = $this->categoryModel->where('category_id', $id)->get();
        foreach($categories as $category){
            $category['sub_categories'] = $this->categoryModel->where('category_id', $category->id)->get();
        }
        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse($categories);
    }

    public function deleteCategory(){
        $inputData = \Input::all();
        $validationRules = [
            'rules' => [
                'id' => 'required | max: 50',
            ],
            'values' => [
                'id' => isset($inputData['id']) ? $inputData['id'] : null,
            ]
        ];

        list($inputData, $validator) = $this->inputValidation($inputData, $validationRules);

        if ($validator->fails()) {
            $validatorMessage = $validator->messages()->toArray();

            return $this->setStatusCode(\Config::get("const.api-status.validation-fail"))
                        ->makeResponseWithError(array('Validation failed', $validatorMessage));
        } elseif ($validator->passes()) {
            $this->categoryModel->where('id', $inputData['id'])->delete();

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($inputData);
            
        }
    }
    public function addCategory(){
        $inputData = \Input::all();
        $validationRules = [
            'rules' => [
                'title' => 'required | max: 50',
                'parentCategoryId' => 'required | max: 50',
            ],
            'values' => [
                'title' => isset($inputData['title']) ? $inputData['title'] : null,
                'parentCategoryId' => isset($inputData['parentCategoryId']) ? $inputData['parentCategoryId'] : null,
            ]
        ];

        list($inputData, $validator) = $this->inputValidation($inputData, $validationRules);

        if ($validator->fails()) {
            $validatorMessage = $validator->messages()->toArray();

            return $this->setStatusCode(\Config::get("const.api-status.validation-fail"))
                        ->makeResponseWithError(array('Validation failed', $validatorMessage));
        } elseif ($validator->passes()) {
            if($this->categoryModel->where('title', $inputData['title'])->first()){
                return $this->setStatusCode(\Config::get("const.api-status.app-failure"))
                            ->makeResponseWithError('Duplicate Title');
            }else{
                $result = $this->categoryModel->insert(array(
                    'title' => $inputData['title'],
                    'category_id' => $inputData['parentCategoryId']
                ));

                return $this->setStatusCode(\Config::get("const.api-status.success"))
                            ->makeResponse($inputData);
            }
            
        }
    }
    
    public function updateCategory(){
        $inputData = \Input::all();
        $validationRules = [
            'rules' => [
                'title' => 'required | max: 50',
                'id' => 'required | max: 50',
            ],
            'values' => [
                'title' => isset($inputData['title']) ? $inputData['title'] : null,
                'id' => isset($inputData['id']) ? $inputData['id'] : null,
            ]
        ];

        list($inputData, $validator) = $this->inputValidation($inputData, $validationRules);

        if ($validator->fails()) {
            $validatorMessage = $validator->messages()->toArray();

            return $this->setStatusCode(\Config::get("const.api-status.validation-fail"))
                        ->makeResponseWithError(array('Validation failed', $validatorMessage));
        } elseif ($validator->passes()) {
            $result = $this->categoryModel->where('id', $inputData['id'])->update(array(
                'title' => $inputData['title']
            ));

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($inputData);
        }
    }

    public function postAddThread(Request $request)
    {
        $inputData = \Input::all();
        $this->validate($request, [
            'title'     => ['required'],
            'content'   => ['required'],
            'category_id'   => ['required']
        ]);
        $thread = array(
            "title" => $request->input('title'),
            "content" => $request->input('content'),
            "category_id" => $request->input('category_id'),
            "author_id" => $this->userData->id
        );
        $thread = $this->threadModel->create($thread);

        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse($thread);
    }
    
    public function getThreads($category_id){
        $threads = $this->threadModel->getThreads($category_id);
        
        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse($threads);
    }

    public function getPosts($thread_id){
        $posts = $this->postModel->getPosts($thread_id);
        
        
        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse($posts);
    }
    
    public function postComment(Request $request){
        $this->validate($request, [
            'thread_id'     => ['required'],
            'post_id'   => ['required'],
            'content'   => ['required']
        ]);
        $post = $request->only(['thread_id', 'post_id', 'content']);
        $post['author_id'] = $this->userData->id;
        
        $post = $this->postModel->create($post);
        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse($post);
    }
    
    

}
