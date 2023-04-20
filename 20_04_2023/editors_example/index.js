import data from "./Data_json/movies.json" assert {type:"json"}
console.log(data)


// var editor = new DataTable.Editor( {
//     data: data,
//     table: '#myTable',
//     fields: [
//         { label: 'Movie Name', name: 'movie_name' },
//         { label: 'Movie Type', name: 'movie_type' },
//         { label: 'Movie Rating', name: 'rating' },
//         { label: 'Movie Release date', name: 'release_date' },
//         // etc
//     ]
// } );

let table = new DataTable('#myTable', {
    data:data,
    dom: 'Bfrtip',
    columns: [
        { data: 'movie_name' },
        { data: 'movie_type' },
        { data: 'rating' },
        { data: 'release_date' },

    ],
    select: true,
    
} );