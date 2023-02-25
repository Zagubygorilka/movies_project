import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";

const Movie = ({movie}) => {
    const {backdrop_path, original_title, vote_average} = movie;


    return (
        <div className={'cardMovie'}>
            <img src={`https://image.tmdb.org/t/p/w500//${backdrop_path}`} alt={'poster'}/>
            <div>{original_title}</div>
            <StarRatings
                rating={vote_average}
                starDimension="40px"
                starSpacing="15px"
                numberOfStars={10}
            />
        </div>
    );
};

export {Movie};