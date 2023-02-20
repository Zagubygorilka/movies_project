import React from 'react';


const Movie = ({movie}) => {
    const {backdrop_path, original_title} = movie;


    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500//${backdrop_path}`} alt={'poster'}/>
            <div>{original_title}</div>

        </div>
    );
};

export {Movie};