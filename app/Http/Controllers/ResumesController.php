<?php

namespace App\Http\Controllers;

use App\Resume;
use Illuminate\Http\Request;

class ResumesController extends Controller
{
    /**
     * return the resume with a given code
     * @return \Illuminate\Http\JsonResponse
     */
    public function getResume(Request $request){
        $resume = Resume::where('code',$request['code'])
                    ->with([
                        'hobbies',
                        'skills',
                        'experiences.company',
                        'achievements',
                        'educations.school',
                        'awards',
                        'user',
                        'languages',
                        'font',
                        'model',
                        'theme'])
                    ->first();
        if($resume){
            $response = [
                'success'=>true,
                'data'=> $resume,
                'message' => ''
            ];

        } else {
            $response = [
                'success'=>false,
                'data'=> [],
                'message' => __('resume not found')
            ];
        }
        return response()->json($response, 201);
    }
}
