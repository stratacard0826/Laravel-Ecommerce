<?php
$actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

if (! preg_match("/\/ideas\//", $actual_link))
{
?>
<title>{{ MetaTag::get('title') }}</title>
{!! MetaTag::openGraph() !!}


@if(!empty($selfImages['picture']))
    @foreach($selfImages['picture'] as $item)
        <meta property="og:image:secure_url" content="{{$item['link']}}">
    @endforeach
@endif

@if(@$MetaDescription)
    <meta name="description" content="{{$MetaDescription}}">
@else
    <meta name="description" content="{{ MetaTag::get('description') }}">
@endif
<?php
}
?>
<meta name="viewport" id="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="p:domain_verify" content="9c11cb39dc3e55a845725fee2454dade"/>

<?php // TODO ?>
<meta charset="<?php // bloginfo('charset'); ?>">

<!--		<link href="//www.google-analytics.com" rel="dns-prefetch">-->
        <link href="/favicon.png" rel="shortcut icon">
<!--        <link href="--><?php //echo get_template_directory_uri(); ?><!--/img/icons/touch.png" rel="apple-touch-icon-precomposed">-->


<link href=https://plus.google.com/+Ideaingsmarterliving rel="publisher" />

<script>
if (screen.width < 992 && screen.width > 620) {
    document.getElementById("viewport").setAttribute("content", "width=980");
}
</script>

<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<link rel="stylesheet" href="/assets/fonts/ideaing/style.css">
<link rel="stylesheet" href="/assets/css/main.css">

<?php
  if(!function_exists('is_single') && @$canonicURL){
        echo '<link rel="canonical" href="'.$canonicURL.'">';
}
?>

<script type="text/javascript" src="/assets/js/main.js"></script>
<meta name="google-site-verification" content="xiWn24mA3aZopoTkElR97n-HdvsfctffW493Q6x_vZU" />

<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-70081627-1', 'auto');
    ga('send', 'pageview');

</script>

<style>
.giveaway_desc ol li{
  list-style: decimal !important;
}
</style>

<!-- Facebook Pixel Code -->
<script>
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','//connect.facebook.net/en_US/fbevents.js');

    fbq('init', '1695690547327420');
    fbq('track', "PageView");</script>
<noscript><img class="hidden" height="1" width="1"
   src="https://www.facebook.com/tr?id=1695690547327420&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->

<!-- Facebook Pixel Code -->
<script>
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', '1060561853983096');
    fbq('track', "PageView");</script>
<noscript><img height="1" width="1" style="display:none"
               src="https://www.facebook.com/tr?id=1060561853983096&ev=PageView&noscript=1"
            /></noscript>
<!-- End Facebook Pixel Code -->
