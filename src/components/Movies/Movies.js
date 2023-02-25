import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieAction} from "../../redux/slices/moviesSlice";
import {Movie} from "../Movie/Movie";

const Movies = () => {

    const {movies} = useSelector(state => state.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieAction.getAll())

    }, [dispatch])
    return (
        <div>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            <div>
                <button>prev</button>
                <button>next</button>
            </div>
        </div>
    );
};

export {Movies};