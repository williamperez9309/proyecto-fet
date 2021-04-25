<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Auth;


class UserController extends Controller
{
    public function current(){
        $user = Auth::user();
        return [
            'user' => $user
        ];
    }

    public  function index() {
        $users = User::all();
        return [
            'users' => $users
        ];
    }

    public function store(Request $request){
        $messages = [
            'email.unique' => 'Este email ya se encuentra duplicado en otro usuario',
        ];

        $this->validate(request(), [
            'name' => ['required','max:100'],
            'email' => ['required','max:100','unique:users,email,'. $request ->id],
        ], $messages);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = \Hash::make($request->password);
        $user->save();
        return response()->json(['user'=> $user],200);
    }

    public function update(Request $request) {
        $user = User::findOrFail($request->id);
        $user->name = $request->name;
        $user->email = $request->email;
        if($request->password){
            $user->password = \Hash::make($request->password);
        }
        $user->save();
        return response()->json(['user'=> $user],200);
    }

}
