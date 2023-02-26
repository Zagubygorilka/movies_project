import React from 'react';
import {useForm} from "react-hook-form";
import {movieAction} from "../../redux/slices/moviesSlice";
import {useDispatch} from "react-redux";


const SearchMovie = () => {
    const {register, reset, handleSubmit} = useForm();
    const dispatch = useDispatch()

    const search = (query) => {

       dispatch(movieAction.search({query}))

        reset()
    };

    return (
        <form onSubmit={handleSubmit(search)}>
            <input type="text" vaplaceholder={'search'} {...register('search') }/>
            <button>SEARCH</button>
        </form>
    );
};

export {SearchMovie}