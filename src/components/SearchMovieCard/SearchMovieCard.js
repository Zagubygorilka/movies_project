import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";

const SearchMovieCard = ({movie}) => {
    const {id, name} = movie;
    console.log(movie);

    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

export {SearchMovieCard}