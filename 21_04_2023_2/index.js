
$(document).ready(function(){
    
    
    var editor = new DataTable.Editor( {
        ajax: {
            url: './Data/staff.json',
            dataSrc: ''
        },
        table: '#myTable',
        fields: [
            { label: 'First name', name: 'first_name' },
            { label: 'Last name',  name: 'last_name'  },
            // etc
        ]
    } );
    


   let table = new DataTable('#myTable', {
    ajax: {
        url: './Data/staff.json',
        dataSrc: ''
    },
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

