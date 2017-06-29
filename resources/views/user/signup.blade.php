@extends('layouts.main')
@section('body-class'){{ 'login-signup' }}@stop
@section('content')
    @include('user.login-signup-content')
@stop

