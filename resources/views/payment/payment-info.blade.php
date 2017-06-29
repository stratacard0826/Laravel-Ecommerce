@extends('layouts.main')
@section('body-class'){{ 'profilepage' }}@stop
@section('content')
    <div>
        <div class="clearfix"></div>
        <input type="hidden" id="pub" name="pub" value="{{ env('STRIPE_PUBLIC') }}">

        <br>
        @include('payment.parts.invoice')
        <br>
        <div style="" id="error-message"></div>
        <br>
        @include('payment.parts.card-info')

        <script type="text/javascript" src="https://js.stripe.com/v2/"></script>
        <script type="text/javascript" src="/assets/js/payment.js"></script>
    </div>
@stop