<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Contracts\Filesystem\Factory;
    use Storage;

    // use Illuminate\Http\Request;


    class Media extends Model {

        /**
         * The database table used by the model.
         *
         * @var string
         */
        protected $table = 'medias';

        protected $fillable = array(
            'media_name',
            'media_type',
            'media_link',
            'is_hero_item',
            'is_main_item',
            'mediable_id',
            'mediable_type'
        );

        protected $hidden = ['mediable_id', 'mediable_type', 'created_at', 'updated_at'];


        /**
         * Define Relationship
         * /
         *
         * /*
         * @return media object
         */
        public function mediable()
        {
            return $this->morphTo();
        }

        /**
         * @param Request $request
         * @return array
         */

        /**
         * @param $id
         */
        public function deleteMediaItem($id)
        {
            //$id = 213;
            $mediaItem = Media::where('id', '=', $id)->first();

            //delete entry from database
            Media::where('id', $id)->delete();

            try
            {
                if (($mediaItem['media_type'] == 'img-upload') || ($mediaItem['media_type'] == 'video-upload'))
                {
                    // delete file from S3
                    $strReplace = \Config::get("const.file.s3-path");// "http://s3-us-west-1.amazonaws.com/ideaing-01/";
                    $file = str_replace($strReplace, '', $mediaItem['media_link']);
                    $s3 = Storage::disk('s3');
                    $s3->delete($file);

                    if ($mediaItem['media_type'] == 'img-upload')
                    {
                        $file = 'thumb-' . $file;
                        $s3->delete($file);
                    }
                }
            } catch (\Exception $ex)
            {
                return;
            }
        }

        public static function getVideoData($videoURL, $videoType = false){
            if(strpos($videoURL, 'youtube') || $videoType == 'video-youtube-link'){
                $videoLink = str_replace('https://www.youtube.com/watch?v=', '', $videoURL);
                $videoLink = str_replace('https://www.youtube.com/embed/', '', $videoLink);
                $return['videoLink'] = "https://www.youtube.com//embed/$videoLink";
                $return['previewLink'] = "https://img.youtube.com/vi/$videoLink/hqdefault.jpg";

            }elseif(strpos($videoURL, 'vimeo')  || $videoType == 'video-vimeo-link'){
                $explode = explode('/', $videoURL);
                if($explode){
                    $videoLink = end($explode);
                }
                $hash = unserialize(file_get_contents("http://vimeo.com/api/v2/video/$videoLink.php"));
                $return['videoLink'] = "https://vimeo.com/$videoLink";
                $return['previewLink'] = $hash[0]['thumbnail_medium'];
            }else{
                $return['videoLink'] = $videoURL;
                $return['previewLink'] = "http://img.youtube.com/vi/0.jpg";
            }
          //  print_r( $return);
            return $return;
        }

    }
