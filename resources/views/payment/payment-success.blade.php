@extends('layouts.main')
@section('body-class'){{ 'profilepage' }}@stop
@section('content')
    <div>
        <div class="clearfix"></div>
        <br>
        <div style="color: darkgreen" id="message">
            @if(Session::has('payment-error-message'))
                {{ Session::get('payment-error-message') }}
            @endif
        </div>
        <br>

    </div>
    <script>
        var delay = 5000; //Your delay in milliseconds
        var URL = '/user/profile';
        setTimeout(function(){ window.location = URL; }, delay);
    </script>
@stop