<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ideaing - Welcome Newsletter</title>
    <style type="text/css">
        /****** EMAIL CLIENT BUG FIXES - BEST NOT TO CHANGE THESE ********/

        .ExternalClass {
            width: 100%;
        }
        /* Forces Outlook.com to display emails at full width */
        .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
        /* Forces Outlook.com to display normal line spacing, here is more on that: http://www.emailonacid.com/forum/viewthread/43/ */

        body {
            -webkit-text-size-adjust: none;
            -ms-text-size-adjust: none;
        }
        /* Prevents Webkit and Windows Mobile platforms from changing default font sizes. */

        html,
        body {
            margin: 0;
            padding: 0;
            border: 0;
            outline: 0;
        }
        /* Resets all body margins and padding to 0 for good measure */

        table td {
            border-collapse: collapse;
            border-spacing: 0px;
            border: 0px none;
            vertical-align: top;
        }
        /*This resolves the Outlook 07, 10, and Gmail td padding issue. Heres more info: http://www.ianhoar.com/2008/04/29/outlook-2007-borders-and-1px-padding-on-table-cells http://www.campaignmonitor.com/blog/post/3392/1px-borders-padding-on-table-cells-in-outlook-07 */
        /****** END BUG FIXES ********/
        /****** RESETTING DEFAULTS, IT IS BEST TO OVERWRITE THESE STYLES INLINE ********/

        body,
        #body_style {
            background: #fff;
            min-height: 1000px;
            color: #000;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 14px;
        }
        /*The "body" is defined here for Yahoo Beta because it does not support your body tag. Instead, it will create a wrapper div around your email and that div will inherit your embedded body styles. The "#body_style" is defined for AOL because it does not support your embedded body definition nor your body tag, we will use this class in our wrapper div. The "min-height" attribute is used for AOL so that your background does not get cut off if your email is short. We are using universal styles for Outlook 2007, including them in the wrapper will not effect nested tables*/

        html,
        body {
            line-height: 1.2;
        }
        /* This looks insane, but all we're doing here is setting a default height for BRs because outlook.com doesn't support margin bottom. Other tags are reset to sensible defaults below... */

        p {
            font-size: 100px !important;
            font-family: cursive !important;
            color: green !important;
            background-color: magenta !important;
        }
        span {
            font-size: 15px;
            line-height: 1.2;
            margin: 0;
            padding: 0;
        }
        /* ...and seriously, never use p tags - outlook.com will drive you insane with its insistence on adding a 1.35em bottom margin (thanks Microsoft!) Use span to mark text areas, br's for spacing, and the line-height on html, body to set the height of those br's */

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        i,
        b,
        a,
        ul,
        li,
        blockquote,
        hr,
        img,
        div,
        span,
        strong {
            line-height: 1.2;
            margin:0;
            padding:0;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-size: 18px;
            color: black;
        }
        h1 {
            font-size: 24px;
            color: black;
        }
        /* A more sensible default for H1s */

        a,
        a:link {
            color: #2A5DB0;
            text-decoration: underline;
        }
        /* This is the embedded CSS link color for Gmail. This will overwrite Outlook.com and Yahoo Beta's embedded link colors and make it consistent with Gmail. You must overwrite this color inline */

        img {
            display: block;
            border: 0 none;
            outline: none;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            vertical-align: bottom;
        }
        a img {
            border: 0 none;
        }
        /** Some email clients add space below images by default, which is problematic if you’re tiling images. Be aware that, by setting images to block-level elements, you can’t align them without resorting to the float or position CSS properties, which aren’t widely supported */

        small {
            font-size: 11px;
            line-height: 1.4;
        }
        small a {
            color: inherit;
            text-decoration: underline;
        }
        span.yshortcuts {
            color: #000;
            background-color: none;
            border: none;
        }
        span.yshortcuts:hover,
        span.yshortcuts:active,
        span.yshortcuts:focus {
            color: #000;
            background-color: none;
            border: none;
        }
        /*When Yahoo! Beta came out, we thought we could put those days behind us but we might have celebrated a little too soon. Here's more: http://www.emailonacid.com/blog/details/C13/yahoo_shortcuts_are_baaaaaaaack */
        /*Optional:*/

        a:visited {
            color: #3c96e2;
            text-decoration: none
        }
        a:focus {
            color: #3c96e2;
            text-decoration: underline
        }
        a:hover {
            color: #3c96e2;
            text-decoration: underline
        }
        /**{margin:0;padding:0}*{font-family:"Helvetica Neue","Helvetica",Helvetica,Arial,sans-serif}img{max-width:100%}.collapse{margin:0;padding:0}body{-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:none;width:100% !important;height:100%}a{color:#2ba6cb} .btn{display: inline-block;padding: 6px 12px;margin-bottom: 0;font-size: 14px;font-weight: normal;line-height: 1.428571429;text-align: center;white-space: nowrap;vertical-align: middle;cursor: pointer;border: 1px solid transparent;border-radius: 4px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;-o-user-select: none;user-select: none;color: #333;background-color: white;border-color: #CCC;} p.callout{padding:15px;background-color:#ecf8ff;margin-bottom:15px}.callout a{font-weight:bold;color:#2ba6cb}table.social{background-color:#ebebeb}.social .soc-btn{padding:3px 7px;border-radius:2px; -webkit-border-radius:2px; -moz-border-radius:2px; font-size:14px;margin-bottom:10px;text-decoration:none;color:#FFF;font-weight:bold;display:block;text-align:center}a.fb{background-color:#3b5998 !important}a.tw{background-color:#1daced !important}a.gp{background-color:#db4a39 !important}a.ms{background-color:#000 !important}.sidebar .soc-btn{display:block;width:100%}table.head-wrap{width:100%}.header.container table td.logo{padding:15px}.header.container table td.label{padding:15px;padding-left:0}table.body-wrap{width:100%}table.footer-wrap{width:100%;clear:both !important}.footer-wrap .container td.content p{border-top:1px solid #d7d7d7;padding-top:15px}.footer-wrap .container td.content p{font-size:14px;font-weight:bold}h1,h2,h3,h4,h5,h6{font-family:"HelveticaNeue-Light","Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;line-height:1.1;margin-bottom:15px;color:#000}h1 small,h2 small,h3 small,h4 small,h5 small,h6 small{font-size:14px;color:#6f6f6f;line-height:0;text-transform:none}h1{font-weight:200;font-size:14px}h2{font-weight:200;font-size:14px}h3{font-weight:500;font-size:14px}h4{font-weight:500;font-size:14px}h5{font-weight:900;font-size:14px}h6{font-weight:900;font-size:14px;text-transform:uppercase;color:#444}.collapse{margin:0 !important}p,ul{margin-bottom:10px;font-weight:normal;font-size:14px;line-height:1.6}p.lead{font-size:14px}p.last{margin-bottom:0}ul li{margin-left:5px;list-style-position:inside}ul.sidebar{background:#ebebeb;display:block;list-style-type:none}ul.sidebar li{display:block;margin:0}ul.sidebar li a{text-decoration:none;color:#666;padding:10px 16px;margin-right:10px;cursor:pointer;border-bottom:1px solid #777;border-top:1px solid #fff;display:block;margin:0}ul.sidebar li a.last{border-bottom-width:0}ul.sidebar li a h1,ul.sidebar li a h2,ul.sidebar li a h3,ul.sidebar li a h4,ul.sidebar li a h5,ul.sidebar li a h6,ul.sidebar li a p{margin-bottom:0 !important}.container{display:block !important;max-width:600px !important;margin:0 auto !important;clear:both !important}.content{padding:15px;max-width:600px;margin:0 auto;display:block}.content table{width:100%}.column{width:300px;float:left}.column tr td{padding:15px}.column-wrap{padding:0 !important;margin:0 auto;max-width:600px !important}.column table{width:100%}.social .column{width:280px;min-width:279px;float:left}.clear{display:block;clear:both}@media only screen and (max-width:600px){a[class="btn"]{display:block !important;margin-bottom:10px !important;background-image:none !important;margin-right:0 !important}div[class="column"]{width:auto !important;float:none !important}table.social div[class="column"]{width:auto !important}}*/
        body{background-color:#EBEBEB;margin:0 auto; text-align: center;}
        .logo{
            text-align: center;
            background-color: white;
            padding: 20 0px;
            max-width: 480px;
            margin-top: 30px
        }
        .logo img{
            margin: 0 auto;
            width: 300px;
        }
        #Table_01 tr
        {
            font-size: 0px;
        }
        a.fb {
            display: inline-block;
            height: 35px;
            font-size: 1rem;
            border-radius: 30px;
            padding: 0 10px 0 0 !important;
            color: #5C7CBD;
            text-align: center;
        }
        a.insta,a.gplus,a.pint{
            display: inline-block;
            height: 35px;
            font-size: 1rem;
            border-radius: 30px;
            padding: 0 10px 0 0 !important;
            color: #5C7CBD;
            text-align: center;
        }

        a.fb i.m-icon {
            color: white;
            background: #5C7CBD;
            padding: 5px;
            border-radius: 20px;
            padding-top: 7px;
            padding-left: 7px;
            padding-right: 7px;
            padding-bottom: 6px;
            float: left; }

        a.twi {
            display: inline-block;
            height: 35px;
            font-size: 1rem;
            border-radius: 30px;
            padding: 0 10px 0 0 !important;
            color: #079DD1;
            text-align: center;}
        a.twi i.m-icon {
            color: white;
            background: #079DD1;
            padding: 5px;
            border-radius: 20px;
            padding-top: 7px;
            padding-left: 7px;
            padding-right: 7px;
            padding-bottom: 6px;
            float: left; }

        a.likes {
            display: inline-block;
            height: 35px;
            font-size: 1rem;
            border-radius: 30px;
            padding: 0 10px 0 0 !important;
            color: #fa0033;
            text-align: center;}
        a.likes i.m-icon {
            color: white;
            background: #fa0033;
            padding: 5px;
            border-radius: 20px;
            padding-top: 7px;
            padding-left: 7px;
            padding-right: 7px;
            padding-bottom: 6px;
            float: left; }
        a.discuss {
            display: inline-block;
            height: 35px;
            font-size: 1rem;
            border-radius: 30px;
            padding: 0 10px 0 0 !important;
            color: #dfdfdf;
            text-align: center;}
        a.discuss i.m-icon {
            color: white;
            background: #dfdfdf;
            padding: 5px;
            border-radius: 20px;
            padding-top: 7px;
            padding-left: 7px;
            padding-right: 7px;
            padding-bottom: 6px;
            float: left; }
        /* There is no way to set these inline so you have the option of adding pseudo class definitions here. They won't work for Gmail nor older versions of Lotus Notes but its a nice addition for all other clients. */
        /*** EMBEDDED CSS NOTES *** 1.) Be aware that Gmail will not read any of your embedded CSS 2.) Although I have seen the !important priority used in other examples, it is not necessary. If you use "!important" you can no longer overwrite your styles inline which is required for Gmail. 3.) The Android does not support "class" declarations outside of the media query. Here is more info on that: http://www.emailonacid.com/blog/the_android_mail_app_and_css_class_declarations/ 4.) You might want to consider duplicating your embedded CSS after the closing body tag for Yahoo! Mail in IE7 & 8. *** END EMBEDDED CSS NOTES ***/
    </style>
</head>

<body bgcolor="#EBEBEB" style="background-color:#EBEBEB;" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<!-- Save for Web Slices (Newsletter Inp.psd) -->
<table id="Table_01" style="margin:0 auto;" width="584" height="3708" border="0" cellpadding="0" cellspacing="0">
    <tr style="font-size: 0px">
        <td colspan="12">
            <img src="https://ideaing.com/assets/images/email/welcome/Newsletter-Inp_01.gif" width="584" height="43" alt=""></td>
    </tr>
    <tr style="font-size: 0px">
        <td colspan="2" rowspan="2">
            <img src="https://ideaing.com/assets/images/email/welcome/Newsletter-Inp_02.gif" width="131" height="112" alt=""></td>
        <td colspan="4">
            <a href="https://ideaing.com/">
                <img src="https://ideaing.com/assets/images/email/welcome/logo.gif" width="223" height="82" border="0" alt="Ideaing"></a></td>
        <td colspan="6" rowspan="2">
            <img src="https://ideaing.com/assets/images/email/welcome/Newsletter-Inp_04.gif" width="230" height="112" alt=""></td>
    </tr>
    <tr style="font-size: 0px">
        <td colspan="4">
            <img src="https://ideaing.com/assets/images/email/welcome/Newsletter-Inp_05.gif" width="223" height="30" alt=""></td>
    </tr>
    <tr style="font-size: 0px">
        <td colspan="11">
            <a href="https://ideaing.com/">
                <img src="https://ideaing.com/assets/images/email/welcome/main-manner.gif" width="558" height="299" border="0" alt="Ideaing banner"></a></td>
        <td rowspan="6">
            <img src="https://ideaing.com/assets/images/email/welcome/Newsletter-Inp_07.gif" width="26" height="573" alt=""></td>
    </tr>
    <tr style="font-size: 0px">
        <td colspan="11">
            <img src="https://ideaing.com/assets/images/email/welcome/Newsletter-Inp_08.gif" width="558" height="21" alt=""></td>
    </tr>
    <tr style="font-size: 0px">
        <td colspan="3" rowspan="2">
            <img src="https://ideaing.com/assets/images/email/welcome/Newsletter-Inp_09.gif" width="147" height="113" alt=""></td>
        <td colspan="2">
            <a href="https://ideaing.com/user/profile">
                <img src="https://ideaing.com/assets/images/email/welcome/get-started.png" width="187" height="64" border="0" alt="start with ideaing"></a></td>
        <td colspan="6" rowspan="2">
            <img src="https://ideaing.com/assets/images/email/welcome/Newsletter-Inp_11.gif" width="224" height="113" alt=""></td>
    </tr>
    <tr style="font-size: 0px">
        <td colspan="2">
            <img src="https://ideaing.com/assets/images/email/welcome/Newsletter-Inp_12.gif" width="187" height="49" alt=""></td>
    </tr>
    <tr style="font-size: 0px">
        <td rowspan="2">
            <img src="https://ideaing.com/assets/images/email/welcome/Newsletter-Inp_13.gif" width="39" height="140" alt=""></td>
        <td colspan="8">
            <a href="https://ideaing.com/room/kitchen">
                <img src="https://ideaing.com/assets/images/email/welcome/link-to-room.gif" width="405" height="109" border="0" alt="room ideaing"></a></td>
        <td colspan="2" rowspan="2">
            <img src="https://ideaing.com/assets/images/email/welcome/Newsletter-Inp_15.gif" width="114" height="140" alt=""></td>
    </tr>
    <tr style="font-size: 0px">
        <td colspan="8">
            <img src="https://ideaing.com/assets/images/email/welcome/Newsletter-Inp_16.gif" width="405" height="31" alt=""></td>
    </tr>
    <tr style="font-size: 0px">
        <td colspan="12">
            <a href="https://ideaing.com/room/office">
                <img src="https://ideaing.com/assets/images/email/welcome/product.gif" width="584" height="377" border="0" alt="office item"></a></td>
    </tr>
    <tr style="font-size: 0px">
        <td colspan="10">
            <a href="https://ideaing.com/shop">
                <img src="https://ideaing.com/assets/images/email/welcome/start-shopping.gif" width="478" height="142" border="0" alt="shopping "></a></td>
        <td colspan="2" rowspan="2">
            <img src="https://ideaing.com/assets/images/email/welcome/Newsletter-Inp_19.gif" width="106" height="193" alt=""></td>
    </tr>
    <tr style="font-size: 0px">
        <td colspan="10">
            <a href="https://ideaing.com/">
                <img src="https://ideaing.com/assets/images/email/welcome/profile.gif" width="478" height="51" border="0" alt="profile "></a></td>
    </tr>
    <tr style="font-size: 0px">
        <td colspan="8">
            <a href="https://ideaing.com/">
                <img src="https://ideaing.com/assets/images/email/welcome/profile-22.gif" width="392" height="57" border="0" alt="profile "></a></td>
        <td colspan="4" rowspan="2">
            <a href="http://ideaing.com">
                <img src="https://ideaing.com/assets/images/email/welcome/comment.gif" width="192" height="176" border="0" alt="comment"></a></td>
    </tr>
    <tr  style="font-size: 0px">
        <td colspan="8">
            <img src="https://ideaing.com/assets/images/email/welcome/Newsletter-Inp_23.gif" width="392" height="119" alt=""></td>
    </tr>
    <tr  style="font-size: 0px">
        <td colspan="10">
            <a href="https://ideaing.com/">
                <img src="https://ideaing.com/assets/images/email/welcome/product-25.gif" width="478" height="492" border="0" alt="ideaing"></a></td>
        <td colspan="2" rowspan="10">
            <img src="https://ideaing.com/assets/images/email/welcome/Newsletter-Inp_25.gif" width="106" height="2233" alt=""></td>
    </tr>
    <tr  style="font-size: 0px">
        <td colspan="10">
            <a href="https://ideaing.com/">
                <img src="https://ideaing.com/assets/images/email/welcome/product-27.gif" width="478" height="418" border="0" alt=""></a></td>
    </tr>
    <tr  style="font-size: 0px">
        <td colspan="10">
            <a href="https://ideaing.com/">
                <img src="https://ideaing.com/assets/images/email/welcome/product-28.gif" width="478" height="522" border="0" alt="product ideaing"></a></td>
    </tr>
    <tr  style="font-size: 0px">
        <td colspan="10">
            <a href="https://ideaing.com/">
                <img src="https://ideaing.com/assets/images/email/welcome/product-29.gif" width="478" height="501" border="0" alt="product"></a></td>
    </tr>
    <tr  style="font-size: 0px">
        <td colspan="10">
            <img src="https://ideaing.com/assets/images/email/welcome/Newsletter-Inp_29.gif" width="478" height="46" alt=""></td>
    </tr>
    <tr style="font-size: 0px">
        <td colspan="3" rowspan="2">
            <img src="https://ideaing.com/assets/images/email/welcome/Newsletter-Inp_30.gif" width="147" height="111" alt=""></td>
        <td colspan="2">
            <a href="https://ideaing.com/">
                <img src="https://ideaing.com/assets/images/email/welcome/discussion.gif" width="187" height="65" border="0" alt="discussion"></a></td>
        <td colspan="5" rowspan="2">
            <img src="https://ideaing.com/assets/images/email/welcome/Newsletter-Inp_32.gif" width="144" height="111" alt=""></td>
    </tr>
    <tr style="font-size: 0px">
        <td colspan="2">
            <img src="https://ideaing.com/assets/images/email/welcome/Newsletter-Inp_33.gif" width="187" height="46" alt=""></td>
    </tr>
    <tr style="font-size: 0px">
        <td colspan="10">
            <a href="https://twitter.com/ideaing">
                <img src="https://ideaing.com/assets/images/email/welcome/twitter.gif" width="478" height="59" border="0" alt="ideaing twitter"></a></td>
    </tr>
    <tr style="font-size: 0px">
        <td colspan="10">
            <img src="https://ideaing.com/assets/images/email/welcome/Newsletter-Inp_35.gif" width="478" height="44" alt=""></td>
    </tr>
    <tr style="font-size: 0px">
        <td style="background-color: white;text-align: center;height:44px" colspan="10" >
            <a class="fb" href="https://www.facebook.com/ideaingsmarterliving"><img width="24" height="25"
                                                                                    src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-facebook-48.png"/></a>
            <a class="twi" href="https://twitter.com/ideaing/"><img  width="24" height="25"
                                                                     src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-twitter-48.png"/></a>
            <a class="pint" href="https://www.pinterest.com/ideaing_com"><img  width="24" height="25"
                                                                               src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-pinterest-48.png"/></a>
            <a class="insta" href="https://www.instagram.com/ideaing_com/"><img  width="24" height="25"
                                                                                 src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-instagram-48.png"/></a>
            <a class="gplus" href="http://google.com/+Ideaingsmarterliving"><img  width="24" height="25"
                                                                                  src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-googleplus-48.png"/></a>

        </td>
    </tr>
    <tr  style="font-size: 10px">
        <td  style="background-color: white;text-align: center;height:44px" colspan="10" >
            <hr/>
            <br/>

            <i>Copyright © 2016 Idea Centric LLC,</i> All rights reserved.<br/>
            You are on this list because you are a subscriber of Ideaing.<br/>
            <br/>
            <strong>Our mailing address is:</strong><br/>
            Idea Centric LLC<br/>
            Gramercy<br/>
            Irvine, Ca 92614<br/>
            <br/>

            <a target="_blank" style="text-decoration:underline ; color: #0a8cce" href="http://ideaing.us12.list-manage.com/vcard?u=96801fe1d5d2163ffc6ff717e&id=eeb6e8c94f">Add us to your address book</a>
            <br/>
            <br/>

            Don't want to hear from Ideaing?<br/>
            You can <a style="text-decoration: none; color: #0a8cce"
                       href="https://ideaing.com/user/profile">unsubscribe</a> from this list<br/>

        </td>

    </tr>

    <tr style="font-size: 0px">
        <td colspan="10">
            <img src="https://ideaing.com/assets/images/email/welcome/Newsletter-Inp_39.gif" width="478" height="40" alt=""></td>
    </tr>

    <tr style="font-size: 0px">
        <td>
            <img src="https://ideaing.com/assets/images/email/welcome/spacer.gif" width="39" height="1" alt=""></td>
        <td>
            <img src="https://ideaing.com/assets/images/email/welcome/spacer.gif" width="92" height="1" alt=""></td>
        <td>
            <img src="https://ideaing.com/assets/images/email/welcome/spacer.gif" width="16" height="1" alt=""></td>
        <td>
            <img src="https://ideaing.com/assets/images/email/welcome/spacer.gif" width="133" height="1" alt=""></td>
        <td>
            <img src="https://ideaing.com/assets/images/email/welcome/spacer.gif" width="54" height="1" alt=""></td>
        <td>
            <img src="https://ideaing.com/assets/images/email/welcome/spacer.gif" width="20" height="1" alt=""></td>
        <td>
            <img src="https://ideaing.com/assets/images/email/welcome/spacer.gif" width="8" height="1" alt=""></td>
        <td>
            <img src="https://ideaing.com/assets/images/email/welcome/spacer.gif" width="30" height="1" alt=""></td>
        <td>
            <img src="https://ideaing.com/assets/images/email/welcome/spacer.gif" width="52" height="1" alt=""></td>
        <td>
            <img src="https://ideaing.com/assets/images/email/welcome/spacer.gif" width="34" height="1" alt=""></td>
        <td>
            <img src="https://ideaing.com/assets/images/email/welcome/spacer.gif" width="80" height="1" alt=""></td>
        <td>
            <img src="https://ideaing.com/assets/images/email/welcome/spacer.gif" width="26" height="1" alt=""></td>
    </tr>
</table>
<!-- End Save for Web Slices -->
</body>
</html>