@extends('layouts.backoffice')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <!-- DataTales Example -->
            <div class="card shadow mb-4">
                <div class="card-header bg-dark py-3">
                    <h6 class="m-0 font-weight-bold" style="color: #FFFFFF">Languages List</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="languages_table">
                            <thead class="thead-dark">
                                <th>Id</th>
                                <th>Name</th>
                                <th>Code</th>
                                <th>Actions</th>
                            </thead>
                            <tfoot class="thead-dark">
                                <th>Id</th>
                                <th>Name</th>
                                <th>Code</th>
                                <th>Actions</th>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    $(document).ready(function(){
        // Data table for serverside
        $('#languages_table').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
                "url": "{{ route('langFilterData') }}",
                "dataType": "json",
                "type": "POST",
                "data":{ _token: "{{csrf_token()}}",route:'admin/languagesList'}
            },
            "columns": [
                { "data": "id" },
                { "data": "name" },
                { "data": "code" },
                { "data": "actions" }
            ],
            aoColumnDefs: [
                {
                    bSortable: false,
                    aTargets: [ -1 ]
                }
            ]
        });
    });
</script>
@endsection
