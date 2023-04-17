// Imported user data from userData.json file

// Common js import data
// const userData=require("./usersData.json")
// const moviesData=require("./movies.json")

// Module js import data
import userData from "./usersData.json" assert {type:'json'}
import moviesData from "./movies.json" assert {type:'json'}

// Create Array of Objects, Objects looks like {name:dinesh,email:jdsolankijd123@gmail.com}

// let newObject=[]

// userData.users.map((data)=>{
//     newObject.push({name:data.name,email:data.name})
// })

// console.log(newObject);



// Find age of all users .

// function calculateAge(data){
//     data.map((data)=>{
//         let birthDay=parseInt((data.dob).substring(0,4),10);
//         let birthMonth=parseInt((data.dob).substring(3,5),10);
//         let birthYear=parseInt((data.dob).substring(6),10);

        
//         let currentDate=new Date()
        
//         let currentDateDay=currentDate.getDate()
//         let currentDateMonth=currentDate.getMonth()
//         let currentDateYear=currentDate.getFullYear()
//         let years=currentDateYear-birthYear
   
        
        // if(birthMonth>currentDateMonth){
        //  years=years-1
        // }else if(birthMonth===currentDateMonth){
        //    if(birthDay>currentDateDay){
        //     years=years-1
        //    }
        // }
        // console.log(`${data.name} Age is ${years} years`);  
    // })
// }

// calculateAge(userData.users)


// Find all comedy movies


// function findComedyMovies(data){

//     let comedyMovies=[];   

//     data.map((movie)=>{
//        let type_array=movie.movie_type.split("|")
//        type_array.find((element)=>{
//         if(element==="Comedy"){
//             comedyMovies.push(movie)
//         }
//        })
//     })

//     console.log(comedyMovies);

// }
// findComedyMovies(moviesData)

// ---------------Display Movies JSON data in to DOM ------------------

var movies_container=document.getElementById("movies_container")

// Map movies data 

moviesData.map((movie)=>{
    displayData(movie)
})

function displayData(data){
   
    var movie_div=document.createElement("div")

    var name=document.createElement("h4")
    name.innerText="Name:-"+data.movie_name

    var rating=document.createElement("h5")
    rating.innerText="Rating:-"+data.rating+"/5"

    var blockbuster=document.createElement("h5")
    if(data.movie_status){
     blockbuster.innerText="BlockBuster movie"
    }
    

    movie_div.append(name,rating,blockbuster)
    movies_container.append(movie_div)


}

