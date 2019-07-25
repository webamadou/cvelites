<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;

class VerificationApiController extends Controller
{
    use VerifiesEmails;
    /**
     * Show the email verification notice
     */
    public function show()
    {
        //
    }

    /**
     * Mark the authenticated user email as verified
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function verify(Request $request)
    {
        $userID = $request['id'];
        $user = User::findOrFail($userID);
        $date = date("Y-m-dg:i:s");

        $user->email_verified_at = $date;// to enable the "email_verified_at" field of that user be a current time stamp by mimicking the must verify email feature

        $user->save();
        $response = [
            'success' => true,
            'data' => [],
            'message' => "Your account is now verified. You can now connect to your space :)"
        ];
        return response()->json($response);
    }

    /**
     * Resend the email verification notification
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function resend(Request $request){
        if($request->user()->hasVerifiedEmail()){
            return response()->json('User already have verified email', 422);
            //return redirect($this->redirectPath());
        }
        $request->user()->sendEmailVerificationNotification();

        return response()->json("The notification has been submitted");

        //return back()->with('resent', true);
    }
}
