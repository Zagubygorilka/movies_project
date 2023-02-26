import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieAction} from "../../redux/slices/moviesSlice";
import {Movie} from "../Movie/Movie";
import css from "./movieContainer.module.css"
import {useSearchParams} from "react-router-dom";

const Movies = () => {

    const {movies, prev, next} = useSelector(state => state.movies)
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page:'1'})

    useEffect(() => {
        dispatch(movieAction.getAll({page:query.get('page')}))

    }, [dispatch, query])
    return (
<div>
    <div>
        <button disabled={!prev} onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>prev</button>
        <button disabled={!next} onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>next</button>
    </div>
        <div className={css.movieContainer}>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
</div>
    );
};

export {Movies};