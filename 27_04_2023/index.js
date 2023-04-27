





$(document).ready(function(){

    // Main Datatable that contains all the information like name,invoice number,brand,country,region, and amount
   
    
    
    var editor = new DataTable.Editor( {
        ajax:  {
            url:"http://localhost:8080/editor",
            type:"post",
            dataSrc:"data"
        },
        table: '#myTable',
        fields: [
            { label: 'Id', name: 'id' },
            { label: 'Name', name: 'Name' },
            { label: 'Invoice_Credit_Note',  name: 'Invoice_Credit_Note'  },
            { label: 'Region',  name: 'Region_SI'  },
            { label: 'Country',  name: 'Country'  },
            { label: 'Category',  name: 'Category'  },
            { label: 'Brand',  name: 'Brand'  },
            { label: 'Date',  name: 'Date' , type:"datetime" },
            { label: 'Amount',  name: 'Amount' }
        ]
    } );

    //--------------- Code for EditIcon----------------------
    // var editIcon = function ( data, type, row ) {
    //     if ( type === 'display' ) {
    //         return data + ' <i class="fa fa-pencil"/>';
    //     }
    //     return data;
    // };
   

    // $('#myTable tbody').on( 'click', 'td i', function (e) {
    //     e.stopImmediatePropagation(); // stop the row selection when clicking on an icon
 
    //     editor.inline( $(this).parent() );
    // } );

    // ------------------------Inline Editing-------------------------------
    $('#myTable').on( 'click', 'tbody td.editable', function (e) {
        editor.inline( this );
    } );

    // ------------------------Bubble Editing-------------------------------
    // $('#myTable').on( 'click', 'tbody td:not(:first-child)', function (e) {
    //     editor.bubble( this );
    // } );
   
   
    $('#myTable').DataTable({
       
        lengthMenu: [20, 40, 60, 80, 100],
        pageLength: 20,
        ajax:  {
            url:"http://localhost:8080/editor",
            type:"post",
            dataSrc:"data"
        },
       columns: [ 
           {data:"id"},
           {data:"Name"},
           {data:"Invoice_Credit_Note"},
           {data:"Region_SI"},
           {data:"Country"},
           {data:"Brand"},
           {data:"Amount",className:"editable"}
        ],
        searchPanes:{
            layout:'columns-5'
        },
        bLengthChange: true,
        dom:"PBlfrtip",
        scrollY: '200px',
        scrollCollapse: true,
        // Inline Style Tab
        // order: [ 1, 'asc' ],
        // keys: {
        //     columns: ':not(:first-child)',
        //     keys: [ 9 ],
        //     editor: editor,
        //     editOnFocus: true
        // },
        select:true,
        buttons: [
            'csv',
            'excel',
            { extend: 'create', editor: editor },
            { extend: 'edit',   editor: editor },
            { extend: 'remove', editor: editor }
        ]
   });
})






