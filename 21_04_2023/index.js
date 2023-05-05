import data from "./Data_json/data.json" assert {type:"json"}

var table_div=document.getElementById("main_div")

 table_div.style.display="none"

 var loading_div=document.getElementById("Loading_div")

 loading_div.style.display="none"



let main_data=[]
function formatDataForErrorSolving(data){
    
    data.map((res)=>{
        if(res.Name!==undefined){
            main_data.push(res)
        }
    })
    
   
}

formatDataForErrorSolving(data.Sale)




var brand_select=document.getElementById("brand_select");
var category_select=document.getElementById("itemCategory");
var country_select=document.getElementById("Country");
var region_select=document.getElementById("Region");

function optionsAppend(data){
    let brand_obj={};
    let category_obj={};
    let country_obj={};
    let region_obj={};

    data.map((res)=>{
        brand_obj[res.Brand]=1
        category_obj[res.Category]=1
        country_obj[res.Country]=1
        region_obj[res.Region_SI]=1
       
    })

    console.log(brand_obj);

    for(let key in brand_obj){
        if(key===""){
        let option=document.createElement("option")
        option.innerText="Not Defined"
        option.value=""
        brand_select.append(option)
        continue
        }
        let option=document.createElement("option")
        option.innerText=key
        option.value=key
        brand_select.append(option)
    }

    for(let key in category_obj){
        if(key===""){
        let option=document.createElement("option")
        option.innerText="Not Defined"
        option.value=""
        category_select.append(option)
        continue
        }
        let option=document.createElement("option")
        option.innerText=key
        option.value=key
        category_select.append(option)
    }

    for(let key in country_obj){
        if(key===""){
        let option=document.createElement("option")
        option.innerText="Not Defined"
        option.value=""
        country_select.append(option)
        continue
        }
        let option=document.createElement("option")
        option.innerText=key
        option.value=key
        country_select.append(option)
    }

    for(let key in region_obj){
        if(key===""){
        let option=document.createElement("option")
        option.innerText="Not Defined"
        option.value=""
        region_select.append(option)
        continue
        }
        let option=document.createElement("option")
        option.innerText=key
        option.value=key
        region_select.append(option)
    }
}

optionsAppend(main_data)


let parameter_form=document.getElementById("parameter_form")

parameter_form.addEventListener("submit",submitForm)

async function submitForm(e){
    e.preventDefault()

    let brand_value=brand_select.value
    let category_value=category_select.value
    let region_value=region_select.value
    let country_value=country_select.value
    let from_date=document.getElementById("from_date").value
    let to_date=document.getElementById("to_date").value
    

    document.getElementById("main_container").style.display="none"
    document.getElementById("navbar").style.display="none"
    loading_div.style.display="flex"
    let arr1=[]
   await main_data.map((res)=>{
        if(brand_value==="NAN"){
            arr1=main_data
            return 
        }
        if(res.Brand===brand_value){
        arr1.push(res)
        }
    })
 
    let arr2=[]
    await arr1.map((res)=>{
        if(category_value==="NAN"){
            arr2=arr1
            return
        }
        if(res.Category===category_value){
            arr2.push(res)
        }
        

    })
  
    let arr3=[]
    await arr2.map((res)=>{
        if(country_value==="NAN"){
            arr3=arr2
            return
        }
        if(res.Country===country_value){
            arr3.push(res)
        }
        

    })

    let arr4=[]
    await arr2.map((res)=>{
        if(region_value==="NAN"){
            arr4=arr3
            return
        }
        if(res.Region_SI===region_value){
            arr4.push(res)
        }
        

    })

    let from_Date_new=new Date(from_date)
    let to_Date_new=new Date(to_date)

    let arr5=[]
    await arr4.map((res)=>{
        let date=new Date(res.Date);
        if(date>=from_Date_new && date<=to_Date_new){
            arr5.push(res)
        }
    })

    console.log(arr5);
    loading_div.style.display="none"
    main_data=arr5

    

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
                layout:'columns-5'
            },
            bLengthChange: true,
            dom:"PBlfrtip",
            buttons:['csv','excel'],
            scrollY: '200px',
            scrollCollapse: true,
       });
    })

    console.log(main_data);

    
    table_div.style.display="block"
}





