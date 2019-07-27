<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Support\Facades\Auth;
//use Illuminate\Support\Facades\Validator;
use JWTAuth;
use JWTAuthException;

use Validator;
use Illuminate\Http\Request;
class UserController extends Controller
{
    private function getToken($email, $password)
    {
        $token = null;
        //$credentials = $request->only('email', 'password');
        try {
            if (!$token = JWTAuth::attempt( ['email'=>$email, 'password'=>$password])) {
                return response()->json([
                    'response' => 'error',
                    'message' => 'Password or email is invalid',
                    'token'=>$token
                ]);
            }
        } catch (JWTAuthException $e) {
            return response()->json([
                'response' => 'error',
                'message' => 'Token creation failed',
            ]);
        }
        return $token;
    }

    public function login(Request $request)
    {
        //$user = \App\User::where('email', $request->email)->get()->first();

        //Auth::attempt($request->only('email','password'));
        //if ($user && \Hash::check($request->password, $user->password)) // The passwords match...
        if(Auth::attempt($request->only('email','password')))
        {
            //$user = \App\User::with()->where('email', $request->email)->get()->first();
            $user = User::with(['hobbies','skills','experiences','country','achievements','educations','awards','resumes'])
                ->where('email',$request->email)
                ->first();
            $token = self::getToken($request->email, $request->password);
            $user->auth_token = $token;
            $user->save();
            $response = [
                'success'=>true,
                'data'=>[
                    'id'=>$user->id,
                    'auth_token'=>$user->auth_token,
                    'title'=>$user->title,
                    'name'=>$user->name,
                    'gender'=>$user->gender,
                    'first_name'=>$user->first_name,
                    'email'=>$user->email,
                    'presentation'=>$user->presentation,
                    'birth_date'=>$user->birth_date,
                    'birth_place'=>$user->birth_place,
                    'avatar'=>$user->avatar,
                    'address'=>$user->address,
                    'views'=>$user->views,
                    'status'=>$user->status,
                    'user_slug'=>$user->user_slug,
                    'relations' => [
                        'hobbies' => $user->hobbies,
                        'skills' => $user->skills,
                        'experiences' => $user->experiences,
                        'country' => $user->country,
                        'achievements' => $user->achievements,
                        'educations' => $user->educations,
                        'awards' => $user->awards,
                        'resumes' => $user->resume
                    ]
                ]
            ];
        }
        else
            $response = ['success'=>false, 'data'=>[], 'message' => ['incorrect'=>'Login or Password incorrect']];

        return response()->json($response, 201);
    }


    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'name' => 'required',
            'email' => "required|email|unique:users,email",
            'password' => 'required',
            'password_confirm' => 'required|same:password',
            ]);
        if($validator->fails()){
            return response()->json([
                'success' => false,
                'data' => '',
                'message' => $validator->messages()
            ], 201);
        }
        $payload = [
            'password'=>\Hash::make($request->password),
            'email'=>$request->email,
            'name'=>$request->name,
            'first_name'=>$request->first_name,
            'auth_token'=> ''
        ];
        $user = new \App\User($payload);
        if ($user->save())
        {
            /*$token = self::getToken($request->email, $request->password); // generate user token
            if (!is_string($token))  return response()->json(['success'=>false,'data'=>'Token generation failed'], 201);
            $user = \App\User::where('email', $request->email)->get()->first();
            $user->auth_token = $token; // update user token
            $user->save();*/
            $user->sendApiEmailVerificationNotification();
            $response = [
                'success'=>true,
                'data'=>[],
                'message' => "Your registration were perfectly saved.<br/>You need to activate your account in order to start using it. We've sent you an email with a link to activate your account.<br/>Please, go to your email address and click on the link to activate your account"
            ];
        }
        else {
            $response = [
                'success' => false,
                'data' => [],
                'message' => "An error occured while processing. Try again latter please"
            ];
            return response()->json($response, 201);
        }
        return response()->json($response, 201);
    }

    public function logout()
    {
        Auth::logout();
        $response = [
            'success'=>true,
            'data'=>[]
        ];
        return response()->json($response, 201);
    }

}
