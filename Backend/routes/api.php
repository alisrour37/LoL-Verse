<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'Auth\AuthController@login')->name('login')->middleware('cors');
    Route::post('register', 'Auth\AuthController@register')->middleware('cors');
    Route::group([
    'middleware' => 'auth:api'
    ], function () {
       
    });
});
