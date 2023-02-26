import React from 'react';

const MovieCard = (movie) => {

    const {backdrop_path, original_title, vote_average, id} = movie;
    return (
        <div>
            <div>id={id}</div>
        </div>
    );
};

export default MovieCard;