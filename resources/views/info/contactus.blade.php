@extends('layouts.main')
@section('body-class'){{ 'contactus-page' }}@stop

        @section('content')
        <nav class="mid-nav">
            <div class="container full-sm fixed-sm">
                <ul class="wrap col-lg-9">
                    <li class="box-link-ul active-ul ">
                        <a class="box-link active" href="#">
                            <span class="box-link-active-line"></span>
                            Contact us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        
        <section id="hero" ng-app="publicApp" ng-controller="publicController">
            <div class="hero-background"></div>
            <div class="contactus-form-container ">

                <div ng-show="Code" class="alert alert-info">
                    <strong>Congratulations!</strong> Your message has been sent .
                </div>
                <div ng-show="contactError" class="alert alert-danger">
                    <strong>Warning!</strong> Please provide valid email address and query.
                </div>
                <p class="title">Get in touch</p>
                <div class="row control-row " id="support-dropdown-holder">
                    <select class="support-button" ng-model="Type">
                        <option value="Support">Support@</option>
                        <option value="Professionals">Professionals@</option>
                        <option value="Legal">Legal@</option>
                        <option value="Press">Press@</option>
                        <option value="Info">Info@</option>
                    </select>
                    {{--<a href="#" class="support-button" data-toggle="#support-list">
                        Support
                        <i class=" m-icon--Actions-Down-Arrow-Active pull-right"></i>
                        <ul class="support-list">
                            <li>First Menu</li>
                            <li>Second Menu</li>
                        </ul>
                    </a>--}}
                </div>
                <div class="row control-row">
                    <input class="form-control" ng-model="Name" placeholder="Your name">
                </div>
                <div class="row control-row">
                    <input class="form-control"  ng-model="Email" placeholder="Email address">
                </div>
                <div class="row control-row">
                    <textarea class="form-control"  ng-model="Message"  placeholder="Start typing question or comment"></textarea>
                </div>
                <br>
                <div class="row text-center">
                    <button ng-click="sendContactUsQuery()" class="btn">Send</button>
                </div>
            </div>
        </section>

        <div class="clearfix">&nbsp;</div>
        <div class="container author-container">
            <div class="row">
                <div class="col-sm-6 author-holder">
                    <p>Are you a customer in need of support? If you have an issue with an order, please contact us at.</p>
                    <p>Support@</p>
                </div>
                <div class="col-sm-6 author-holder">
                    <p>
                        We are always looking for great business partners including media outlets that need content and OEMs looking for exposure.
                    </p>
                    <p>Partnerships@</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 author-holder">
                    <p>
                        Do you have your own interior design studio or are a contractor working on beautiful homes? Contact us to be listed on our site to get connected with more customers in your area!
                    </p>
                    <p>Professionals@</p>
                </div>
                <div class="col-sm-6 author-holder">
                    <p>
                        Ideaing is a fun site dedicated to growing the smart home market. If you are looking for more information information to write an article about us or the smart home market, please contact us!
                    </p>
                    <p>Press@</p>
                </div>
            </div>
            <div class="row ">
                <div class="col-sm-6 author-holder">
                    <p>If you would like to contact us regarding any trademark, copyright, or other legal issues, please let us know.</p>
                    <p>Legal@</p>
                </div>
                <div class="col-sm-6 author-holder">
                    <p>
                        If you made it this far and still can't nd what you're looking for, or have a general inquiry, email our general address and we'll find someone on our team to help!
                    </p>
                    <p>Info@</p>
                </div>
            </div>
        </div>
        
        <div class="contactus-footer">
            <div class="container text-center">
                <p>Are you super smart and savvy? Do you love tech and beautiful houses?<br>
                We're building an incredible team. Submit your resume here!</p>
                <p>Careers@ </p>
            </div>
        </div>

        @stop
    
