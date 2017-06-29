<?php

namespace App\Http\Controllers;

use App\Events\SendAdminNotificationEmail;
use App\Models\Comment;
use App\Models\Giveaway;
use App\Models\Product;
use App\Models\User;

use App\Models\WpPost;
use Illuminate\Http\Request;

use App\Http\Requests;
use Carbon\Carbon;


class CommentController extends ApiController
{
    public function __construct()
    {
        $this->comment = new Comment();
        $this->user = new User();
    }

    // Broadcast notification to the relevant users
    public function addProductNotification($data)
    {
        $this->addNotification($data, 'product');
    }

    public function addIdeasNotification($data)
    {
        $this->addNotification($data, 'ideas');
    }

    public function addGiveawayNotification($data)
    {
        $this->addNotification($data, 'giveaway');
    }


    /*public function dt()
    {

        $commnet = new \App\Models\Comment();
        return $commnet->ideasCommentCounter(2883);
    }*/

    /**
     * @param $data
     * @param $section
     * @internal param $info
     */
    private function addNotification($data, $section)
    {
        $info['Users'] = [];
        foreach ($data['CommentInfo'] as $commenter) {

            if ($commenter['UserId'] != $data['SenderId'])
                array_push($info['Users'], $commenter['UserId']);
        }
        $info['Users'] = array_unique($info['Users']);
        $info['Category'] = 'comment';//$data['Category'];
        $info['SenderId'] = $data['SenderId'];
        $info['Permalink'] = $section . '/' . $data['Permalink'] . '#comment';
        $info['PostTime'] = $data['PostTime'];
        $info['ItemTitle'] = $data['ItemTitle'];
        $info['Section'] = $section;

        $this->user->sendNotificationToUsers($info);

        $this->sendNotificationMailToAdmin($info['Permalink']);
    }


    /**
     * @return mixed
     */
    public function emailContent()
    {
        $fileContent = \Storage::get('admin-email-list.txt');
        return $fileContent;
    }

    public function sendNotificationMailToAdmin($permalink)
    {
        try{
            $fileContent = $this->emailContent();

            $emailList = preg_split("/(:| |;|,)/", $fileContent);

        //    dd($emailList);

            foreach($emailList as $email)
            {
                \Event::fire(new SendAdminNotificationEmail($permalink,$email));
            }

        }catch(\Exception $ex){
            return false;
        }

    }

    public function getAdminEmailList()
    {
        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse($this->emailContent());
    }

    public function setAdminEmailList()
    {
        $inputData = \Input::all();

        \Storage::put('admin-email-list.txt', $inputData['Email']);

        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse($this->emailContent());
    }

    public function addCommentForProduct()
    {
        $inputData = \Input::all();

        if (!empty($inputData['comment']) && !empty($inputData['pid'])) {
            $data['UserId'] = $inputData['uid'];
            $data['ProductId'] = $inputData['pid'];
            $data['Comment'] = $inputData['comment'];

            $data['Link'] = $inputData['plink'];
            $data['Flag'] = 'Show';
            $data['Img'] = $inputData['img'];

            // Add product title in the notification
            $product = Product::where('id', $inputData['pid'])->first();
            $data['ItemTitle'] = $product['product_name'];

            $result = $this->comment->addCommentForProduct($data);

            $notification['CommentInfo'] = $this->comment->findCommentForProduct(['ProductId' => $inputData['pid']]);
            $notification['SenderId'] = $inputData['uid'];
            $notification['Permalink'] = $data['Link'];

            $dataStr = date("Y-m-d H:i:s");
            $notification['PostTime'] = (string)$dataStr;

            $notification['ItemTitle'] = $product['product_name'];
            //  $notification['Section'] = 'product';


            $this->addProductNotification($notification);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($result);

        }

    }

    // add comment for ideas
    public function addCommentForIdeas()
    {
        $inputData = \Input::all();

        if (!empty($inputData['comment']) && !empty($inputData['pid'])) {
            $data['UserId'] = $inputData['uid'];
            $data['ItemId'] = $inputData['pid'];
            $data['Comment'] = $inputData['comment'];
            $data['Img'] = $inputData['img'];

            $data['Link'] = $inputData['plink'];
            $data['Flag'] = 'Show';

            // Add product title in the notification
            $product = WpPost::where('ID', $inputData['pid'])->first();
            $data['ItemTitle'] = $product['post_title'];


            $result = $this->comment->addCommentForIdeas($data);

            $notification['CommentInfo'] = $this->comment->findCommentForIdeas(['ItemId' => $inputData['pid']]);
            $notification['SenderId'] = $inputData['uid'];
            $notification['Permalink'] = $data['Link'];

            // $dateTime = Carbon::now();
            $dataStr = date("Y-m-d H:i:s");//$dateTime->date;
            $notification['PostTime'] = (string)$dataStr;//$data['Link'];

            $notification['ItemTitle'] = $product['post_title'];

            $this->addIdeasNotification($notification);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($result);

        }

    }

    public function addCommentForGiveaway()
    {
        $inputData = \Input::all();

        if (!empty($inputData['comment']) && !empty($inputData['pid'])) {
            $data['UserId'] = $inputData['uid'];
            $data['ItemId'] = $inputData['pid'];
            $data['Comment'] = $inputData['comment'];
            $data['Img'] = $inputData['img'];

            $data['Link'] = $inputData['plink'];
            $data['Flag'] = 'Show';

            // Add giveaway title in the notification
            $giveaway = Giveaway::where('id', $inputData['pid'])->first();
            $data['ItemTitle'] = $giveaway['giveaway_title'];


            //
            $result = $this->comment->addCommentForGiveaway($data);

            $notification['CommentInfo'] = $this->comment->findCommentForGiveaway(['ItemId' => $inputData['pid']]);
            $notification['SenderId'] = $inputData['uid'];
            $notification['Permalink'] = $data['Link'];

            // $dateTime = Carbon::now();
            $dataStr = date("Y-m-d H:i:s");//$dateTime->date;
            $notification['PostTime'] = (string)$dataStr;//$data['Link'];

            $notification['ItemTitle'] = $giveaway['giveaway_title'];

            $this->addGiveawayNotification($notification);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($result);

        }

    }

    public function getCommentForProduct($pid = null)
    {
        if (!empty($pid)) {
            $data['ProductId'] = $pid;

            $result = $this->comment->findCommentForProduct($data);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($result);

        }

    }

    public function getCommentForIdeas($pid = null)
    {
        if (!empty($pid)) {
            $data['ItemId'] = $pid;

            $result = $this->comment->findCommentForIdeas($data);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($result);

        }

    }

    public function getCommentForGiveaway($pid = null)
    {
        if (!empty($pid)) {
            $data['ItemId'] = $pid;

            $result = $this->comment->findCommentForGiveaway($data);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($result);

        }

    }
    public function updateComment()
    {
        $inputData = \Input::all();

        if (!empty($inputData['comment']) && !empty($inputData['cid'])) {
            $data['Id'] = $inputData['cid'];
            $data['Comment'] = $inputData['comment'];


            $result = $this->comment->updateCommentForProduct($data);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($result);

        }

    }

    public function deleteComment()
    {
        $inputData = \Input::all();

        if (!empty($inputData['cid'])) {
            $data['Id'] = $inputData['cid'];
            $result = $this->comment->deleteCommentForProduct($inputData['cid']);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($result);

        }

    }

    public function sendEmailToAdmin($data)
    {

    }


}
