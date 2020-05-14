<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'Auth\AuthController@login')->name('login');
    Route::post('register', 'Auth\AuthController@register');
    Route::group([
    'middleware' => 'auth:api'
    ], function () {
        Route::post('profileUpdate','UserController@update');
        Route::get('/friend/indexpeople','FriendController@indexpeople');
        Route::get('/friend/indexfriends','FriendController@indexfriends');
        Route::get('logout', 'Auth\AuthController@logout');
        Route::get('user', 'Auth\AuthController@user');
        Route::post('/friend/add', 'FriendController@store');
        Route::get('/friend/requests', 'FriendController@requests');
        Route::post('/friend/accept', 'FriendController@accept');
        Route::get('/category', 'CategoryController@index');
        Route::get('/inparty', 'InPartyController@index');
        Route::get('/inparty/count', 'InPartyController@partyusers');
        Route::get('/parties', 'PartyController@index');
        Route::post('/party', 'PartyController@party');
        Route::post('/inparty/join', 'InPartyController@join');
        Route::post('/partylist', 'InPartyController@list');
        Route::post('/party/create', 'PartyController@create');
        Route::get('/indexinparty', 'InPartyController@indexinparty');
        Route::post('/leaveparty', 'InPartyController@destroy');
        Route::get('/userinfo','UserController@userinfo');
    });
});