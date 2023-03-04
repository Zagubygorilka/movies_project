import React, {useState} from 'react';
// import {movieService} from "../../services/movieService";

const SearchMovieCard = ({movie}) => {
    const {id, name} = movie;
    console.log(movie);


    // const {movielist, setMovielist }=useState([])

     // const findFilm = movieService.searchById(id)
     //    console.log(findFilm);



    return (
        <div>
            <h3>{id}---{name}</h3>
        </div>
    );
};

export {SearchMovieCard}