import React, {useEffect, useState} from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";

const MovieCard = ({state}) => {
    const {backdrop_path,original_title,vote_average,overview} = state

    return (
        <div>
            <div><img src={`https://image.tmdb.org/t/p/w500//${backdrop_path}`} alt={'poster'}/></div>
            <h3>{original_title}</h3>
            <div><StarRatings
                rating={vote_average}
                starDimension="20px"
                starSpacing="5px"
                numberOfStars={10}
            /></div>
            <h4>{overview}</h4>
        </div>
    );
};

export default MovieCard;