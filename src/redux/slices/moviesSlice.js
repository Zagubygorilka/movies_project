import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movieService";


const initialState = {
    movies: [],
    page: null,
    errors: null,
    loading: null
   } ;

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await movieService.getAll();

            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name:'movies/Slice',
    initialState,
    reducers:{},
    extraReducers: builder => builder.addCase(getAll.fulfilled, (state, action) => {
        const {page, results} = action.payload;
        state.movies = results
        state.page = page

        })

})

const {reducer:movieReducer} = movieSlice

const movieAction = {
    getAll
}

export {
    movieReducer,
    movieAction
}