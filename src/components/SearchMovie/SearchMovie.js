import React from 'react';
import {useForm} from "react-hook-form";
import {movieAction} from "../../redux/slices/moviesSlice";
import {useDispatch, useSelector} from "react-redux";
import {SearchMovieCard} from "../SearchMovieCard/SearchMovieCard";


const SearchMovie = () => {
    const {register, reset, handleSubmit} = useForm();
    const dispatch = useDispatch()
    const {movies} = useSelector(state => state.movies)

    const search = (data) => {
        const query = data.search;
        console.log(query);
        dispatch(movieAction.search(query))

        console.log(movies);
        reset()
    };

    return (
       <div>
        <form onSubmit={handleSubmit(search)}>
            <input type="text" vaplaceholder={'search'} {...register('search') }/>
            <button>SEARCH</button>
        </form>
        <div>
            {movies.map(movie => <SearchMovieCard key={movie.id} movie={movie}/>)}
        </div>

       </div>
    );
};

export {SearchMovie}