<?php

namespace App\Http\Controllers;

use App\Comments;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    public function show(Request $request){
        $data = Comments::where('newsID',$request->newsID)->get();
        return json_encode($data);
    }
    public function addComment(Request $request){
        $comment = new Comments;
        $comment->username = $request->username;
        $comment->comment= $request->comment;
        $comment->newsID= $request->newsID;
        $comment->save();
    }
}
