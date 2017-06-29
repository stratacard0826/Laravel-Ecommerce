@extends('layouts.main')

@section('body-class'){{ 'error-page' }}@stop

@section('content')
<div id="hero">
    <div class="hero-background"></div>
    <img class="image-404" src="/assets/images/404/404.png" alt="">
    <div class="desktop">
        <img class="arrow-down" src="/assets/images/404/arrow-down.png" alt="">
        <img class="arrow-circle" src="/assets/images/404/arrow-circle.png" alt="">
        <img class="arrow-left1" src="/assets/images/404/arrow-left.png" alt="">
        <img class="arrow-or" src="/assets/images/404/arrow-or.png" alt="">
        <img class="arrow-left2" src="/assets/images/404/arrow-left.png" alt="">
        
        <span class="white-button buster">Buster is lost.</span>
        <span class="white-button and">And so, are you.</span>
        <span class="red-button tap">
            <a href="/">
                Tap here to go home.
            </a>
        </span>
        <span class="red-button register">
            <a href="/signup">
                Register, its easy
            </a>
        </span>
        <span class="fb-button">
            <a href="https://www.facebook.com/ideaingsmarterliving">
                <img src="/assets/images/404/fb.png" alt="">&nbsp;&nbsp;
                Let's connect on Facebook
            </a>
        </span>
    </div>
    <div class="mobile">
        <span class="white-button ">Buster is lost.</span>
        <img class="arrow-down-short" src="/assets/images/404/arrow-down-short.png" alt="">
        <span class="white-button ">And so, are you.</span>
        <img class="arrow-down-short" src="/assets/images/404/arrow-down-short.png" alt="">
        <span class="red-button ">
            <a href="/">
                Tap here to go home.
            </a>
        </span>
        <img class="arrow-or-short" src="/assets/images/404/arrow-or-short.png" alt="">
        <span class="red-button ">
            <a href="/signup">
                Register, its easy
            </a>
        </span>
        <img class="arrow-down-short" src="/assets/images/404/arrow-up-short.png" alt="">
        <span class="fb-button">
            <a href="https://www.facebook.com/ideaingsmarterliving">
                <img src="/assets/images/404/fb.png" alt="">&nbsp;&nbsp;
                Let's connect on Facebook
            </a>
        </span>
    </div>
    <!--<a class="register-btn btn" href="/register"></a>
    <a class="facebook-btn btn" href="https://www.facebook.com/ideaingsmarterliving"></a>-->
</div>
    
@stop