var movies = [
    {
        title:"Avengers: Endgame",
        rating:5,
        watched:true
    },
    {
        title:"Godzilla: The King Of Monsters",
        rating:5,
        watched:true
    },
    {
        title:"Joker",
        rating:4.5,
        watched:false
    },
    {
        title:"Captain Marvel",
        rating:4.5,
        watched:true
    },
    {
        title:"Fantastic Four",
        rating:3.5,
        watched:false
    }

];

movies.forEach(function(movie){
    if (movie.watched){
        console.log("You have watched \""+movie.title+"\" - "+movie.rating+" stars");
    }
    else{
        console.log("You have not seen \""+movie.title+"\" - "+movie.rating+" stars");
    }
});