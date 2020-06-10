<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $users = User::select()->get();

        return response()->json(array('success' => true, 'users' => $users), 200);
        
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\user  $user
     * @return \Illuminate\Http\Response
     */
    public function show(user $user)
    {
        //
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\user  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(user $user)
    {
        //
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\user  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, user $user)
    {
        $user = Auth::user();
        //
        if($user->id != $request->user_id){
            return response()->json(array('Not allowed' => false), 401); 
        }
        $request->validate([
            'first_name' => 'nullable|string',
            'last_name' => 'nullable|string',
        ]);
        if($request->upload === 'true'){
            $request->image->move('image/',$request->user_id.".png");
            $user->profile =$request->user_id;
        }
        $user->first_name = $request->first_name ?? $user->first_name;
        $user->last_name = $request->last_name ?? $user->last_name;        
        $user->username = $request->username ?? $user->username;      
        $user->about = $request->about ?? $user->about;   
        $user->save();

        return response()->json(array('success' => true, $user), 200);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\user  $user
     * @return \Illuminate\Http\Response
     */
    public function userinfo(Request $request)
    {
        $user = Auth::user();
        if($user->id != $request->id){
            return response()->json(array('Not allowed' => false), 401); 
        }
        return $user;
    }
}
