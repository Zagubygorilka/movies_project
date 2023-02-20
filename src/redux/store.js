import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/moviesSlice";

const rootReducer = combineReducers({
    movie: movieReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {
    setupStore
}