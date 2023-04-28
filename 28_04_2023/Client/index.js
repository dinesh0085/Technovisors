$(document).ready(function(){

    var editor = new DataTable.Editor( {
        ajax:{
            url:"http://localhost:8080/product",
            type:"post",
            dataSrc:"data"
        },
        table: '#product_table',
        fields: [
            { label: 'name', name: 'name' },
            { label: 'Type',  name: 'type'  },
            { label: 'Last name',  name: 'color'  },
            { label: 'Last name',  name: 'price'  },
            { label: 'Last name',  name: 'discount'  },
            // etc
        ]
    } );

    $("#product_table").DataTable({
        ajax:{
            url:"http://localhost:8080/product",
            type:"post",
            dataSrc:"data"
        },
        columns:[
            {data:"name"},
            {data:"type"},
            {data:"color"},
            {data:"price"},
            {data:"discount"},
        ],
        buttons:[
            "csv","excel",
            { extend: 'create', editor: editor },
            { extend: 'edit',   editor: editor },
            { extend: 'remove', editor: editor }
        ],
        select:true,
        dom:"Blfrtip"
    })
})