<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Carbon\Carbon;

class Heart extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'hearts';

    /**
     * Define Relationship
     * /
     *
     * /*
     * @return media object
     */

    public function heartable()
    {
        return $this->morphTo();
    }

    public function addHeartCounter($info)
    {
        $this->deleteHeartCounterByData($info);

        if($info['UnHeart'] == true)
        {
           return 'UnHearted';
        }

        $item = $this->heartCounterByItemInfo($info);

        $heart = new Heart();
        $heart->user_id = $info['UserId'];

        $result = $item->hearts()->save($heart);

        return $result;
    }

    public function deleteHeartCounterByData($info)
    {
        if ($info['Section'] == 'product') {

            $section = 'App\Models\Product';

        } elseif ($info['Section'] == 'ideas') {

            $section = 'App\Models\WpPost';
        }elseif ($info['Section'] == 'giveaway') {

            $section = 'App\Models\Giveaway';
        }


        $heart = Heart::where('user_id', $info['UserId'])
                     ->where('heartable_id', $info['ItemId'])
            ->where('heartable_type',$section)
        ->first();

        if(!empty($heart) && $heart->count() > 0)
        {
            $heart->delete();

            return true;
        }

        return false;
    }

    public function deleteHeartCounterById($id)
    {
        if (!empty($id)) {
            $heart = Heart::find($id);
            $$heart->delete();

            return true;
        }
        return false;
    }

    // return heart count for an item
    public function heartCounter($info)
    {
        $item = $this->heartCounterByItemInfo($info);

        // set user status whether the user liked the item or not
        $user = false;
        foreach ($item->hearts as $heart) {
            if ($heart['user_id'] == $info['UserId']) {
                $user = true;
                break;
            }
        }

        $data['UserStatus'] = $user;
        $data['Count'] = $item->hearts->count();
        
        return $data;
    }

    // return related heart information
    public function findHeartCountForItem($data)
    {
        if ($data['Section'] == 'product') {

            $item = Product::where('id', $data['ItemId'])
                           ->with('hearts')
                           ->first();
            $itemTitle = $item['product_name'];

        } elseif ($data['Section'] == 'ideas') {

            $item = WpPost::where('ID', $data['ItemId'])
                          ->with('hearts')
                          ->first();
            $itemTitle = $item['post_title'];
        }elseif ($data['Section'] == 'giveaway') {

            $item = Giveaway::where('id', $data['ItemId'])
                          ->with('hearts')
                          ->first();
            $itemTitle = $item['giveaway_title'];
        }

        $itemsHeartCounts = isset($item->hearts) ? $item->hearts : [];
        $HeartCountCollection = new Collection();

        $user = new User();

        foreach ($itemsHeartCounts as $singleComment) {
            $userInfo = $user->getUserById($singleComment['user_id']);

            $data['HeartId'] = $singleComment['id'];
            $data['UserId'] = $userInfo['id'];
            $data['UserName'] = $userInfo['name'];
            $data['UserEmail'] = $userInfo['email'];
            $data['Picture'] = $userInfo->medias[0]->media_link;
            $data['PostTime'] = Carbon::createFromTimestamp(strtotime($singleComment['created_at']))->diffForHumans();

            $HeartCountCollection->push($data);

        }

        $HeartCountCollection->put('ItemTitle', $itemTitle);

        return $HeartCountCollection;

    }

    public function recentHeartedUsers($itemId,$section,$count = 3)
    {
        $section = $section == 'product'? 'App\Models\Product':'App\Models\WpPost';
        $heartInfo = Heart::where('heartable_type',$section)
            ->where('heartable_id',$itemId)
            ->orderBy('created_at','DESC')
            ->take($count)
            ->get();

        $userCollection = new Collection();
        $user = new User();

        foreach($heartInfo as $singleItem)
        {
            $userInfo = $user->getUserById($singleItem->user_id);

            $userCollection->push($userInfo);

        }

        return $userCollection;
    }

    /**
     * @param $info
     * @return Model|null|static
     */
    public function heartCounterByItemInfo($info)
    {
        if ($info['Section'] == 'product') {

            $item = Product::where('id', $info['ItemId'])
                           ->with('hearts')
                           ->first();
            //return $item;

        } elseif ($info['Section'] == 'ideas') {

            $item = WpPost::where('ID', $info['ItemId'])
                          ->with('hearts')
                          ->first();
           // return $item;
        }elseif ($info['Section'] == 'giveaway') {

            $item = Giveaway::where('id', $info['ItemId'])
                          ->with('hearts')
                          ->first();
            // return $item;
        }
        return $item;
    }

    public function simpleHeartCounter($info)
    {
        if ($info['Section'] == 'product') {

            $item = Heart::where('heartable_id', $info['ItemId'])
                ->where('heartable_type','App\Models\Product')
                           ->count();
        } elseif ($info['Section'] == 'ideas') {

            $item = Heart::where('heartable_id', $info['ItemId'])
                         ->where('heartable_type','App\Models\WpPost')
                         ->count();
        }elseif ($info['Section'] == 'giveaway') {

            $item = Heart::where('heartable_id', $info['ItemId'])
                         ->where('heartable_type','App\Models\Giveaway')
                         ->count();
        }



        return $item;

    }


}
