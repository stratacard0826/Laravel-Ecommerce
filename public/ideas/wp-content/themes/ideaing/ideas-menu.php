<?php
$cat = get_category( get_query_var( 'cat' ) );
$currentCat = $cat->slug;
?>
                <ul class="wrap col-lg-3 col-md-4">
<!--                     <li class="box-link-ul {{$currentCat}}">-->
<!--                                <a href="/ideas/usage-list" class="box-link --><?php //echo $currentCat == 'usage-list' ? 'active' : '' ?><!--">Usage</a>-->
<!--                            </li>-->
                            <li class="box-link-ul">
                                <a href="/ideas/best" class="box-link <?php echo $currentCat == 'best-reviews' ? 'active' : '' ?>">Best</a>
                            </li>
                             <li class="box-link-ul">
                                <a href="/ideas/style" class="box-link <?php echo $currentCat == 'style' ? 'active' : '' ?>">Style</a>
                            </li>
                            <li class="box-link-ul">
                                <a href="/ideas/how-to" class="box-link <?php echo $currentCat == 'how-to' ? 'active' : '' ?>">How To</a>
                            </li>
                </ul>