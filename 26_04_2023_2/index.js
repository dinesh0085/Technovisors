import data from "./Data_json/data.json" assert {type:"json"}





let main_data=[]
function formatDataForErrorSolving(data){
    
    data.map((res)=>{
        if(res.Name!==undefined){
            main_data.push(res)
        }
    })
    
   
}

formatDataForErrorSolving(data)


$(document).ready(function(){

    // Main Datatable that contains all the information like name,invoice number,brand,country,region, and amount
   
    var editor = new DataTable.Editor( {
        ajax:  {
            url:"http://localhost:8080/editor",
            type:"get",
            dataSrc:"data"
        },
        table: '#myTable',
        fields: [
            { label: 'Id', name: 'Internal_ID' },
            { label: 'Name', name: 'Name' },
            { label: 'Invoice_Credit_Note',  name: 'Invoice_Credit_Note'  },
            { label: 'Region',  name: 'Region_SI'  },
            { label: 'Country',  name: 'Country'  },
            { label: 'Brand',  name: 'Brand'  },
            { label: 'Date',  name: 'Date'  },
            { label: 'Amount',  name: 'Amount'  }
            // etc
        ]
    } );
   
   
   
    $('#myTable').DataTable({
       
        lengthMenu: [20, 40, 60, 80, 100],
        pageLength: 20,
        ajax:  {
            url:"http://localhost:8080/editor",
            type:"get",
            dataSrc:"data"
        },
       columns: [ 
           {data:"Name"},
           {data:"Invoice_Credit_Note"},
           {data:"Region_SI"},
           {data:"Country"},
           {data:"Brand"},
           {data:"Amount"}
        ],
        searchPanes:{
            layout:'columns-5'
        },
        bLengthChange: true,
        dom:"PBlfrtip",
        scrollY: '200px',
        scrollCollapse: true,
        select: true,
        buttons: ['csv','excel',
            { extend: 'create', editor: editor },
            { extend: 'edit',   editor: editor },
            { extend: 'remove', editor: editor }
        ]
   });
})






