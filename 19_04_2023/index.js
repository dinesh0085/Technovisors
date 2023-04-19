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


// This function will create a second new collection of data that will contain the name and its counts.
let nameCountCollection=[]
function nameCount(data){
   let obj={};
   data.map((res)=>{
    if(obj[res.Name]===undefined){
        obj[res.Name]=1
    }else{
        obj[res.Name]++
    }
   })

   for(let key in obj){
     let obj2={};
     obj2["name"]=key;
     obj2["count"]=obj[key];
     nameCountCollection.push(obj2)
   }
}  

nameCount(data.Sale)

// This function will create a second new collection of data that will contain the region and its counts.

let regionCountCollection=[]
function regionCount(data){
   let obj={};
   data.map((res)=>{
    if(obj[res.Region_SI]===undefined){
        obj[res.Region_SI]=1
    }else{
        obj[res.Region_SI]++
    }
   })

   for(let key in obj){
     let obj2={};
     if(key.length===0){
        obj2["region"]="No data";
        obj2["count"]=obj[key];
     }else{
        obj2["region"]=key;
        obj2["count"]=obj[key];
     }
     
     regionCountCollection.push(obj2)
   }
}  
regionCount(data.Sale)


// This function will create a second new collection of data that will contain the country and its counts.

let countryCountCollection=[]
function countryCount(data){
   let obj={};
   data.map((res)=>{
    if(obj[res.Country]===undefined){
        obj[res.Country]=1
    }else{
        obj[res.Country]++
    }
   })

   for(let key in obj){
     let obj2={};
     if(key.length===0){
        obj2["country"]="No data";
        obj2["count"]=obj[key];
     }else{
        obj2["country"]=key;
     obj2["count"]=obj[key];
     }
     
     countryCountCollection.push(obj2)
   }
}  

countryCount(data.Sale)


// This function will create a second new collection of data that will contain the brand and its counts.

let brandCountCollection=[]
function brandCount(data){
   let obj={};
   data.map((res)=>{
    if(obj[res.Brand]===undefined){
        obj[res.Brand]=1
    }else{
        obj[res.Brand]++
    }
   })

   for(let key in obj){
     let obj2={};
     if(key.length===0){
        obj2["brand"]="No data";
        obj2["count"]=obj[key];
     }else{
        obj2["brand"]=key;
        obj2["count"]=obj[key];
     }
     
     brandCountCollection.push(obj2)
   }
}  

brandCount(data.Sale)


// JQuery function 
$(document).ready(function(){

    // Name and Its Count Datatable
    let nameCountTable=$("#nameCountTable").dataTable({
        data:nameCountCollection,
        columns: [
            { data: 'name' },
            { data: 'count'},
        ],
        bPaginate: false,
        bLengthChange: false,
        bSearch: false,
        bFilter: false,  
    })

   // Region and Its Count Datatable
    let regionCountTable=$("#regionCountTable").dataTable({
        data:regionCountCollection,
        columns: [
            { data: 'region' },
            { data: 'count'},
        ],
        bPaginate: false,
        bLengthChange: false,
        bSearch: false,
        bFilter: false,  
    })

    // Country and Its Count Datatable
    let countryCountTable=$("#countryCountTable").dataTable({
        data:countryCountCollection,
        columns: [
            { data: 'country' },
            { data: 'count'},
        ],
        bPaginate: false,
        bLengthChange: false,
        bSearch: false,
        bFilter: false,  
    })

    // Brand and Its Count Datatable
    let brandCountTable=$("#brandCountTable").dataTable({
        data:brandCountCollection,
        columns: [
            { data: 'brand' },
            { data: 'count'},
        ],
        bPaginate: false,
        bLengthChange: false,
        bSearch: false,
        bFilter: false,  
    })

    // Main Datatable that contains all the information like name,invoice number,brand,country,region, and amount
    $('#myTable').DataTable({
        lengthMenu: [20, 40, 60, 80, 100],
        pageLength: 4,
       data:main_data,
       columns: [ 
           {data:"Name"},
           {data:"Invoice_Credit_Note"},
           {data:"Region_SI"},
           {data:"Country"},
           {data:"Brand"},
           {data:"Amount"}
        ],
        dom:"Bfrtip",
        buttons:['csv','excel']
      
   });
})


