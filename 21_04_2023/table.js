import data from "./Data_json/data.json" assert {type:"json"}

// There is a data inside our main data, which is causing error, due to which this function has been created to delete it.
let main_data=[]
function formatDataForErrorSolving(data){
    
    data.map((res)=>{
        if(res.Name!==undefined){
            main_data.push(res)
        }
    })
    
   
}

formatDataForErrorSolving(data.Sale)


$(document).ready(function(){

    // Main Datatable that contains all the information like name,invoice number,brand,country,region, and amount
    $('#myTable').DataTable({
       
        lengthMenu: [20, 40, 60, 80, 100],
        pageLength: 20,
       data:main_data,
       columns: [ 
           {data:"Name"},
           {data:"Invoice_Credit_Note"},
           {data:"Region_SI"},
           {data:"Country"},
           {data:"Brand"},
           {data:"Amount"}
        ],
        searchPanes:{
            layout:'columns-3'
        },
        bLengthChange: true,
        dom:"PBlfrtip",
        buttons:['csv','excel'],
        scrollY: '200px',
        scrollCollapse: true,
   });
})


