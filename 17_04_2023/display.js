// Module js import data it is used for Display data in DOM
import moviesData from "./movies.json" assert {type:'json'}

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