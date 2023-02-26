import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";
import {Link} from "react-router-dom";

const Movie = ({movie}) => {
    const {backdrop_path, original_title, vote_average, id} = movie;


    return (
        <div className={'cardMovie'}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500//${backdrop_path}`} alt={'poster'}/>

                <Link to={'/MovieCard'} movie={movie}><h3>{original_title}</h3></Link>
            </div>
            <div>
                <StarRatings
                    rating={vote_average}
                    starDimension="20px"
                    starSpacing="5px"
                    numberOfStars={10}
                />
            </div>
        </div>
    );
};

export {Movie};