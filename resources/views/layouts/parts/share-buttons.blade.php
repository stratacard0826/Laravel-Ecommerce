        <li class="all-shares">
            <span class="passive">Sharing is caring</span>
            <span class="active hidden-soft"><b class="share-count all"></b><br/><span class="hidden-620">all</span> shares</span>
        </li>

        <li><a data-service="facebook" class="fb" href="#" ng-click="openSharingModal('facebook')"><i class="m-icon m-icon--facebook-id"></i> </a></li>
        <li><a data-service="twitter"  class="twi" href="#" ng-click="openSharingModal('twitter')"><i class="m-icon  m-icon--twitter-id"></i> </a></li>
        <li><a data-service="googleplus"  class="gp" href="#"  ng-click="openSharingModal('googleplus')"><i class="m-icon m-icon--google-plus-id"></i> </a></li>
        <li><a data-service="pinterest"  class="pint" href="#" ng-click="openSharingModal('pinterest')"><i class="m-icon  m-icon--pinterest-id"></i></a></li>

        <?php
          if(function_exists('is_single')){
              $theTitle = get_the_title();
          }else{
              $theTitle = '';
          }
        ?>

        <li class="email-wrap"><a  class="email hidden-620" href="mailto:?subject=Check this out: <?php echo $theTitle ?>&amp;body=Check  this out on IDEAING: <?php echo "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]" ?>" href="#" ><i class="m-icon m-icon--email-form-id"></i></a></li>
