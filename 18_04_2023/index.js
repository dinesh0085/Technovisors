// ----------------------------------------------------------------------------------------------------------

// Find Average marks for each student for each subject and create new collection according to that.

// const studentsData=require("./studentsData.json")



// function calculateAverageMarks(data){

//     let newStudentCollection=[]

//    data.map((student)=>{
//      let terms=student.marks
//      let maths=0;
//      let english=0;
//      let social_science=0;
//      let science=0;
//      let hindi=0;
//     for(let i=0;i<terms.length;i++){
//         maths=maths+terms[i]["Maths"]
//         english=english+terms[i]["English"]
//         social_science=social_science+terms[i]["Social_science"]
//         science=science+terms[i]["Science"]
//         hindi=hindi+terms[i]["Hindi"]
//     }
     
//     maths=Math.floor(maths/terms.length)
//     english=Math.floor(english/terms.length)
//     social_science=Math.floor(social_science/terms.length)
//     science=Math.floor(science/terms.length)
//     hindi=Math.floor(hindi/terms.length)
    
//     let createObject=newObject(student.name,maths,english,social_science,science,hindi)
//      console.log(createObject);
//      newStudentCollection.push(createObject)
//    })

//    return newStudentCollection
// }

// function newObject(Name,Maths,English,Social_science,Science,Hindi){
//     return {
//         Name,
//         Maths,
//         English,
//         Social_science,
//         Science,
//         Hindi
//     }
// }

// console.log(calculateAverageMarks(studentsData))


// ----------------------------------------------------------------------------------------------------------


// import data from "./data.json" assert {type:'json'}

// const tableBody=document.getElementById("tableBody")

// function displayDataToTable(data){
//  console.log(data); 
//    data.map((res)=>{
//     const tr=document.createElement("tr")
//     const td1=document.createElement("td")
//     const td2=document.createElement("td")
//     const td3=document.createElement("td")
//     const td4=document.createElement("td")
//     const td5=document.createElement("td")
//     const td6=document.createElement("td")
//     td1.innerText=res.Name;
//     td2.innerText=res.Name;
//     td3.innerText=res.Name;
//     td4.innerText=res.Country;
//     td5.innerText=res.Brand;
//     td6.innerText=res.Amount;
//     tr.append(td1,td2,td3,td4,td5,td6)
//     tableBody.append(tr)

//    })
// }

// displayDataToTable(data.Sales.Sale)


// Display JSON data in table using JQuery and Data Table

$(document).ready( function () {

   
    $('#myTable').DataTable({
         lengthMenu: [20, 40, 60, 80, 100],
         pageLength: 50,
        ajax: {
            url: './Data_json/data.json',
            dataSrc: 'Sale'
        },
        columns: [ 
            {data:"Name"},
            {data:"Invoice/Credit Note"},
            {data:"Region (SI)"},
            {data:"Country"},
            {data:"Brand"},
            {data:"Amount"}
         ],
         dom:"Bfrtip",
         buttons:['csv','excel']
       
    });

   
} );