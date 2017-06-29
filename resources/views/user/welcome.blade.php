@extends('layouts.main')

@section('body-class'){{ 'aboutus-page' }}@stop

@section('content')

<section>
    <article id="weclome-page">
        <section class="row">
            <div class="container">
                <div class="center-block">
                    <span class="m-icon--bulb2">
                       <img src="/assets/svg/bulb.svg" >
                    </span>
                </div>
                <h1>Welcome to the family</h1>
            </div>
        </section>

        <section class="row pink-bg">
            <div class="container">
                <p>Ideaing was designed to help change the way you live. To live smarter.           Our team & community are here to provide the most interesting stories, best how-to tips, and surface the most amazing smart gadgets. </p>
            </div>
        </section>

        <section class="four-sections">
            <div class="container no-padding">
                <div class="col-sm-6 col-xs-12 category-block category-smart-home hover-zoom overhide">
                    <div class="z-wrap relative">
                        <span class="m-icon m-icon--smart-home"></span>
                        <h3>Smart Home</h3>
                        <p>Improve your home security, lighting, and automation for smarter living.</p>
                        <a href="/smart-home" class="learn-more white box-link category-bg button--moema">Learn more</a>
                        <br/>
                        <a href="/shop/smart-home" class="shop-now swing-lined white"><span>Shop now</span></a>
                    </div>
                    <div class="box-item__overlay category-bg"></div>
                    <div class="half-shadow"></div>
                    <img class="img-responsive" src="/assets/images/welcome/welcome-smart-home.jpg">
                </div>
                <div class="col-sm-6 col-xs-12 category-block category-smart-body hover-zoom overhide">
                    <div class="z-wrap relative">
                        <span class="m-icon m-icon--wearables"></span>
                        <h3>Smart Body</h3>
                        <p>Increase your performance, or simply stay fashionable while connected.</p>
                        <a href="/smart-body" class="learn-more white box-link category-bg button--moema">Learn more</a>
                        <br/>
                        <a  href="/smart/smart-body" class="shop-now swing-lined white"><span>Shop now</span></a>
                    </div>

                    <div class="box-item__overlay category-bg"></div>
                    <div class="half-shadow"></div>
                    <img class="img-responsive" src="/assets/images/welcome/welcome-smart-body.jpg">
                </div>
                <div class="col-sm-6 col-xs-12 category-block category-smart-travel hover-zoom overhide">
                    <div class="z-wrap relative">
                        <span class="m-icon m-icon--travel"></span>
                        <h3>Smart Travel</h3>
                        <p>Stay connected and fully charged with smart luggage, bags, and gadgets.</p>
                        <a href="/smart-travel" class="learn-more white box-link category-bg button--moema">Learn more</a>
                        <br/>
                        <a href="/shop/smart-travel"  class="shop-now swing-lined white"><span>Shop now</span></a>
                    </div>

                    <div class="box-item__overlay category-bg"></div>
                    <div class="half-shadow"></div>
                    <img class="img-responsive" src="/assets/images/welcome/welcome-smart-travel.jpg">

                </div>
                <div class="col-sm-6 col-xs-12 category-block category-smart-entertainment hover-zoom overhide">
                    <div class="z-wrap relative">
                        <span class="m-icon m-icon--video"></span>
                        <h3>Smart Entertainment</h3>
                        <p>Create the best audio / video entertainment systems for your home.</p>
                        <a href="/smart-entertainment" class="learn-more white box-link category-bg button--moema">Learn more</a>
                        <br/>
                        <a href="/shop/smart-entertainment" class="shop-now swing-lined white"><span>Shop now</span></a>
                    </div>

                    <div class="box-item__overlay category-bg"></div>
                    <div class="half-shadow"></div>
                    <img class="img-responsive" src="/assets/images/welcome/welcome-smart-entertainment.jpg">
                </div>
            </div>
        </section>

        <section class="row">
            <div class="container no-padding">
                <div class="col-sm-6 col-xs-12 giveaways">
                    <h3>Giveaways</h3>
                    <p>Enter to win the most cutting edge smart gadgets including smart home, wearables, entertainment and travel.</p>
                    <a class="get-started swing-lined" href="/giveaway"><span>Get started</span></a>
                </div>
                <div class="col-sm-6 col-xs-12">
                    <img src="/assets/images/welcome/welcome-giveaway.jpg">
                </div>
            </div>
        </section>

        <section class="row pale-grey-bg">
            <div class="container">
            <h3>Join us</h3>
            <p>Invite your friends to join you in getting the latest reviews, news, and deals!</p>
                <a class="get-started swing-lined" href="/giveaway"><span>Invite a friend</span></a>
            </div>
        </section>


    </article>
</section>

@stop
