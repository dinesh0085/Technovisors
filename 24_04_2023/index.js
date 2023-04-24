
$(document).ready(function(){
    
    
    var editor = new DataTable.Editor( {
        ajax: {
            url: 'http://localhost:8080/editor',
            type:"post",
            dataSrc: ''
        },
       
        table: '#myTable',
        idSrc: "id",
        fields: [
            { label: 'First name', name: 'first_name' },
            { label: 'Last name',  name: 'last_name'  },
            // etc
        ]
    } );
    


   let table = new DataTable('#myTable', {
    ajax: {
        url: "http://localhost:8080/editor",
        type:"post",
        dataSrc:'data',
    },
    processing:true,
    serverSide:true,
    dom: 'Bfrtip',
    columns: [
        { data: 'first_name' },
        { data: 'last_name' },
    ],
    select: true,
    buttons: [
        { extend: 'create', editor: editor },
        { extend: 'edit',   editor: editor },
        { extend: 'remove', editor: editor }
    ]
} );
})

