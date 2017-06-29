{{--<!DOCTYPE html>
<html>
<head>
</head>
<body>

<div class="content">
    <div class="title">Dear {{ $name }}</div>
    Please click on the "Reset" link to Reset your email [ <a href="{{ url('/password-reset-form').'/'.$code}}">Verify</a> ]
</div>

</body>
</html>--}}

        <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ideaing - Email Notification</title>
    <style type="text/css">
        /* Client-specific Styles */
        #outlook a {
            padding: 0;
        }

        /* Force Outlook to provide a "view in browser" menu link. */
        body {
            width: 100% !important;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
        }

        /* Prevent Webkit and Windows Mobile platforms from changing default font sizes, while not breaking desktop design. */
        .ExternalClass {
            width: 100%;
        }

        /* Force Hotmail to display emails at full width */
        .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {
            line-height: 100%;
        }

        /* Force Hotmail to display normal line spacing.*/
        #backgroundTable {
            margin: 0;
            padding: 0;
            width: 100% !important;
            line-height: 100% !important;
        }

        img {
            outline: none;
            text-decoration: none;
            border: none;
            -ms-interpolation-mode: bicubic;
        }

        a img {
            border: none;
        }

        .image_fix {
            display: block;
        }

        p {
            margin: 0px 0px !important;
        }

        table td {
            border-collapse: collapse;
        }

        table {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        a {
            color: #0a8cce;
            text-decoration: none;
            text-decoration: none !important;
        }

        /*STYLES*/
        table[class=full] {
            width: 100%;
            clear: both;
        }

        /*IPAD STYLES*/
        @media only screen and (max-width: 640px) {
            a[href^="tel"], a[href^="sms"] {
                text-decoration: none;
                color: #0a8cce; /* or whatever your want */
                pointer-events: none;
                cursor: default;
            }

            .mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
                text-decoration: default;
                color: #0a8cce !important;
                pointer-events: auto;
                cursor: default;
            }

            table[class=devicewidth] {
                width: 440px !important;
                text-align: center !important;
            }

            table[class=devicewidthinner] {
                width: 420px !important;
                text-align: center !important;
            }

            img[class=banner] {
                width: 440px !important;
                height: 220px !important;
            }

            img[class=colimg2] {
                width: 440px !important;
                height: 220px !important;
            }

        }

        /*IPHONE STYLES*/
        @media only screen and (max-width: 480px) {
            a[href^="tel"], a[href^="sms"] {
                text-decoration: none;
                color: #0a8cce; /* or whatever your want */
                pointer-events: none;
                cursor: default;
            }

            .mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
                text-decoration: default;
                color: #0a8cce !important;
                pointer-events: auto;
                cursor: default;
            }

            table[class=devicewidth] {
                width: 280px !important;
                text-align: center !important;
            }

            table[class=devicewidthinner] {
                width: 260px !important;
                text-align: center !important;
            }

            img[class=banner] {
                width: 280px !important;
                height: 140px !important;
            }

            img[class=colimg2] {
                width: 280px !important;
                height: 140px !important;
            }

        }
    </style>
</head>
<body>

<table id="backgroundTable" st-sortable="header" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0"
       width="100%">
    <tbody>
    <tr>
        <td>
            <table hasbackground="true" class="devicewidth" align="center" border="0" cellpadding="0" cellspacing="0"
                   width="600">
                <tbody>
                <tr>
                    <td width="100%">
                        <table class="devicewidth" align="center" border="0" cellpadding="0" cellspacing="0"
                               width="600">
                            <tbody>
                            <!-- Spacing -->
                            <tr>
                                <td style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;" height="20">
                                </td>
                            </tr>
                            <!-- Spacing -->
                            <tr>
                                <td>
                                    <!-- logo -->

                                    <table class="devicewidth" align="center" border="0" cellpadding="0" cellspacing="0"
                                           width="140">
                                        <tbody>
                                        <tr>
                                            <td height="45" align="center" width="169">
                                                <div class="imgpop">
                                                    <a href="#"><img id="kgva7ywpd3"
                                                                     src="http://s3-us-west-1.amazonaws.com/ideaing-01/product-56ccaf1928dce-logo.jpg"
                                                                     st-image="logo" alt=""
                                                                     style="display:block; border:none; outline:none; text-decoration:none;"
                                                                     height="45" border="0" width="169"></a>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <!-- end of logo -->
                                </td>
                            </tr>
                            <!-- Spacing -->
                            <tr>
                                <td style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;" height="20">
                                </td>
                            </tr>
                            <!-- Spacing -->
                            </tbody>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </tbody>
</table>

<table id="backgroundTable" st-sortable="full-text" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0"
       width="100%">
    <tbody>
    <tr>
        <td>
            <table hasbackground="true" class="devicewidth" align="center" border="0" cellpadding="0" cellspacing="0"
                   width="600">
                <tbody>
                <tr>
                    <td width="100%">
                        <table class="devicewidth" align="center" border="0" cellpadding="0" cellspacing="0"
                               width="600">
                            <tbody>
                            <!-- Spacing -->
                            <tr>
                                <td style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;" height="20">
                                </td>
                            </tr>
                            <!-- Spacing -->
                            <tr>
                                <td>
                                    <table class="devicewidthinner" align="center" border="0" cellpadding="0"
                                           cellspacing="0" width="560">
                                        <tbody>
                                        <!-- Title -->
                                        <tr>
                                            <td style="font-family: Helvetica, arial, sans-serif; font-size: 30px; color: #333333; text-align:center; line-height: 30px;"
                                                st-title="fulltext-heading">
                                                <p align="left">
                                                    <span style="font-size: 14pt;" class="im"><span style="font-size: 14pt;">Hi {{ $name }}
                                                            ,</span><br><span style="font-size: 14pt;">Thanks for being with Ideaing.</span><br><span
                                                                style="font-size: 14pt;"><a
                                                                    style="color:rgb(254,39,65);text-decoration:none"
                                                                    href="{{ url('/') }}">Visit Ideaing</a> right now !</span> </span>
                                                </p>
                                            </td>
                                        </tr>
                                        <!-- End of Title --><!-- spacing -->
                                        <tr>
                                            <td style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;"
                                                height="20" width="100%">
                                            </td>
                                        </tr>
                                        <!-- End of spacing --><!-- content -->
                                        <tr>
                                            <td style="font-family: Helvetica, arial, sans-serif; font-size: 16px; color: #666666; text-align:center; line-height: 30px;"
                                                st-content="fulltext-content">
                                                <p>
                                                </p>
                                            </td>
                                        </tr>
                                        <!-- End of content -->
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <!-- Spacing -->
                            <tr>
                                <td style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;" height="20">
                                </td>
                            </tr>
                            <!-- Spacing -->
                            </tbody>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </tbody>
</table>
<table id="backgroundTable" st-sortable="2-images+text-columns" bgcolor="#ffffff" border="0" cellpadding="0"
       cellspacing="0" width="100%">
    <tbody>
    <tr>
        <td>
            <table hasbackground="true" class="devicewidth" align="center" border="0" cellpadding="0" cellspacing="0"
                   width="600">
                <tbody>
                <tr>
                    <td width="100%">
                        <table class="devicewidth" align="center" bgcolor="#ffffff" border="0" cellpadding="0"
                               cellspacing="0" width="600">
                            <tbody>
                            <tr>
                                <td>
                                    <!-- start of left column -->

                                    <table class="devicewidth" align="left" border="0" cellpadding="0" cellspacing="0"
                                           width="290">
                                        <tbody>
                                        <!-- Spacing -->
                                        <tr>
                                            <td height="20" width="100%">
                                            </td>
                                        </tr>
                                        <!-- Spacing -->
                                        <tr>
                                            <td>
                                                <!-- start of text content table -->

                                                <table class="devicewidth" align="left" border="0" cellpadding="0"
                                                       cellspacing="0" width="">
                                                    <tbody>
                                                    <!-- image -->
                                                    <tr>
                                                        <td class="devicewidth" height="" align="center" width="">
                                                            <div class="imgpop">
                                                                <img id="diasbyt3mu"
                                                                     src="http://s3-us-west-1.amazonaws.com/ideaing-01/product-56ccb01f35c3f-common.jpg"
                                                                     alt="" st-image="ipad"
                                                                     style="display:block; border:none; outline:none; text-decoration:none;"
                                                                     class="colimg2" height="" border="0"
                                                                     width="">
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <!-- end of text content table -->
                                        </tbody>
                                    </table>
                                    <!-- end of left column --><!-- start of right column -->
                                    <table class="devicewidth" align="right" border="0" cellpadding="0" cellspacing="0"
                                           width="290">
                                        <tbody>
                                        <!-- Spacing -->
                                        <tr>
                                            <td height="20" width="100%">
                                            </td>
                                        </tr>
                                        <!-- Spacing -->
                                        <tr>
                                            <td>
                                                <!-- start of text content table -->

                                                <table class="devicewidth" align="left" border="0" cellpadding="0"
                                                       cellspacing="0" width="">
                                                    <tbody>
                                                    <!-- image -->
                                                    <tr>
                                                        <td class="devicewidth" height="93" align="center" width="">
                                                            <div class="imgpop">
                                                                <a href="{{ url('/')}}"><img
                                                                            id="9e1kcwzabc8"
                                                                            src="http://s3-us-west-1.amazonaws.com/ideaing-01/product-56ceef90d6f6f-go-to-ideaing.jpg"
                                                                            alt="" st-image="ipad"
                                                                            style="display:block; border:none; outline:none; text-decoration:none;"
                                                                            class="colimg2" height="" border="0"
                                                                            width=""></a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <!-- Content -->

                                                    <!-- end of Content --><!-- end of content -->
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <!-- end of text content table -->
                                        </tbody>
                                    </table>
                                    <!-- end of right column -->
                                </td>
                            </tr>
                            <!-- Spacing -->
                            <tr>
                                <td height="10" width="100%">
                                </td>
                            </tr>
                            <!-- Spacing -->
                            </tbody>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </tbody>
</table>
<table id="backgroundTable" st-sortable="separator" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0"
       width="100%">
    <tbody>
    <tr>
        <td>
            <table hasbackground="true" class="devicewidth" align="center" border="0" cellpadding="0" cellspacing="0"
                   width="600">
                <tbody>
                <tr>
                    <td style="font-size:1px; line-height:1px;" height="30" align="center">
                    </td>
                </tr>
                <tr>
                    <td style="font-size:1px; line-height:1px;" height="1" align="center" bgcolor="#d1d1d1" width="550">
                    </td>
                </tr>
                <tr>
                    <td style="font-size:1px; line-height:1px;" height="30" align="center">
                    </td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </tbody>
</table>
<table id="backgroundTable" st-sortable="footer" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0"
       width="100%">
    <tbody>
    <tr>
        <td>
            <table hasbackground="true" class="devicewidth" align="center" border="0" cellpadding="0" cellspacing="0"
                   width="600">
                <tbody>
                <tr>
                    <td width="100%">
                        <table class="devicewidth" align="center" border="0" cellpadding="0" cellspacing="0"
                               width="600">
                            <tbody>
                            <tr>
                                <td style="font-family: Helvetica, arial, sans-serif; font-size: 14px;color: #666666"
                                    st-content="postfooter" align="center" valign="middle">
                                    <p style="text-align: center;">
                                        Click here to <a style="text-decoration: none; color: #0a8cce"
                                                         href="http://staging.ideaing.com/unsubscribe">Unsubscribe</a>
                                    </p>
                                    <p style="text-align: center;">
                                    </p>
                                    <p style="text-align: center;">
                                        Ideaing Inc.
                                    </p>
                                    <p style="text-align: center;">
                                        Ideaing Califonia , USA
                                    </p>
                                </td>
                                <td>

                                </td>
                            </tr>
                            <!-- Spacing -->
                            <tr>
                                <td height="20" width="100%">
                                </td>
                            </tr>
                            <!-- Spacing -->
                            </tbody>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </tbody>
</table>
</body>
</html>

