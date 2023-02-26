import React from 'react';
import MovieCard from "../../components/MovieCard/MovieCard";
import {useLocation} from "react-router-dom";


const MovieCardPage = () => {
    const {state} = useLocation()
    return (
        <div>
            <MovieCard state={state}/>
        </div>
    );
};

export {MovieCardPage};