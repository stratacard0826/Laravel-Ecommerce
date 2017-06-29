<?php
        /**
         * Created by PhpStorm.
         * User: sanzeeb
         * Date: 12/9/2015
         * Time: 5:05 PM
         */

    namespace App\Core;

        use DOMDocument;

        // use Illuminate\Cache;

    class FeedParser {

        public function __construct()
        {
            $this->domObj = new DOMDocument();
        }

        public function parseFeed($onlyData = false, $feedCount = 0, $cacheable = false)
        {
            if ($cacheable == true && \Cache::has('feed.cache'))
            {
                $data = \Cache::get('feed.cache');

                return $onlyData ? $data['item'] : $data;
            }

            $feed = $this->domObj;
            $feed->load(env('FEED_URL'));
            $json = array();

            $json['title'] = $feed->getElementsByTagName('channel')->item(0)->getElementsByTagName('title')->item(0)->firstChild->nodeValue;
            $json['description'] = $feed->getElementsByTagName('channel')->item(0)->getElementsByTagName('description')->item(0)->firstChild->nodeValue;

            $json['link'] = isset($feed->getElementsByTagName('channel')->item(0)->getElementsByTagName('link')->item(0)->firstChild->nodeValue) ? $feed->getElementsByTagName('channel')->item(0)->getElementsByTagName('link')->item(0)->firstChild->nodeValue : "";

            $items = $feed->getElementsByTagName('channel')->item(0)->getElementsByTagName('item');


            $json['item'] = array();
            $i = 0;

            foreach ($items as $item)
            {
                $i++;

                $title = $item->getElementsByTagName('title')->item(0)->firstChild->nodeValue;

                $tmpDescription = $item->getElementsByTagName('description')->item(0)->firstChild->nodeValue;

                $description = $this->cleanDescription($tmpDescription);
                $image = $this->imageParser($tmpDescription);

                $pubDate = $item->getElementsByTagName('pubDate')->item(0)->firstChild->nodeValue;
                $url = $item->getElementsByTagName('guid')->item(0)->firstChild->nodeValue;


                $json['item'][ $i ]['title'] = $title;
                $json['item'][ $i ]['description'] = $description;
                $json['item'][ $i ]['image'] = $image;
                $json['item'][ $i ]['pubdate'] = $pubDate;
                $json['item'][ $i ]['url'] = $url;
            }

            if ($feedCount != 0)
            {
                $json['item'] = array_slice($json['item'], 0, $feedCount);
            }

            if ($cacheable == true)
            {
                \Cache::put('feed.cache', $json, env("FEED_CACHE_TIME"));
            }

            return $onlyData ? $json['item'] : $json;
        }

        public function imageParser($html)
        {
            $dom = $this->domObj;
            $dom->loadHTML($html);
            $dom->preserveWhiteSpace = false;
            $img = $dom->getElementsByTagName("img");

            if ($img->length > 0)
                return $img->item(0)->getAttribute("src");
            else
            {
                return "";
            }

            /* $links = array();
             for ($i = 0; $i < $imgs->length; $i++)
             {
                 $links[] = $imgs->item($i)->getAttribute("src");
             }*/

        }

        public function cleanDescription($html)
        {
            return strip_tags($html);
        }
    }

?>

