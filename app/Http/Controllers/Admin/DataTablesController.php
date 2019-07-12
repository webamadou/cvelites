<?php

namespace App\Http\Controllers\Admin;

use App\Language;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DataTablesController extends Controller
{
    public function languagesList(Request $request){
        return view('admin.languages.index');
    }
    public function languagesListFilter(Request $request){
        $columns = array(
            0 =>'id',
            1 =>'name',
            2 =>'code',
            4 =>'actions',
        );
        $totalData = Language::count();
        $totalFiltered = $totalData;
        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');

        if(empty($request->input('search.value')))
        {
            $languages = Language::offset($start)
                ->limit($limit)
                ->orderBy($order,$dir)
                ->get();
        }
        else {
            $search = $request->input('search.value');

            $languages =  Language::where('id','LIKE',"%{$search}%")
                ->orWhere('name', 'LIKE',"%{$search}%")
                ->orWhere('code', 'LIKE',"%{$search}%")
                ->offset($start)
                ->limit($limit)
                ->orderBy($order,$dir)
                ->get();

            $totalFiltered = Language::where('id','LIKE',"%{$search}%")
                ->orWhere('name', 'LIKE',"%{$search}%")
                ->orWhere('code', 'LIKE',"%{$search}%")
                ->count();
        }
        $data = array();
        if(!empty($languages))
        {
            foreach ($languages as $key=>$institute)
            {

                $nestedData['id'] = $key+1;
                $nestedData['name'] = $institute->name;
                $nestedData['code'] = $institute->code;
                $nestedData['actions'] = '<a href="#" class="btn btn-danger">Del<span class="glyphicon glyphicon-trash"></span> </a><a href="#" class="btn btn-primary">Edit<span class="glyphicon glyphicon-edit"></span></a>';
                $data[] = $nestedData;
            }

        }
        $json_data = array(
            "draw"            => intval($request->input('draw')),
            "recordsTotal"    => intval($totalData),
            "recordsFiltered" => intval($totalFiltered),
            "data"            => $data
        );
        echo json_encode($json_data);
    }
}
