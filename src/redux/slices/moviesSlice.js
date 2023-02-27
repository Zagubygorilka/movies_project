import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movieService";


const initialState = {
    movies: [],
    prev: null,
    next: null,
    page:null,
    errors: null,
    loading: null
};

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {

            const {data} = await movieService.getAll(page);

            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const search = createAsyncThunk(
    'moviesSlice/search',
    async (query, thunkAPI) => {

        try {

            const {data} = await movieService.search(query);
            console.log(data);
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
    extraReducers: builder => builder

        .addCase(getAll.fulfilled, (state, action) => {
            const {page, results} = action.payload;
            state.movies = results
            state.page = page
            state.prev = page -1
            state.next = page+1

        })
        .addCase(search.fulfilled,(state, action)=>{
            const {page, results} = action.payload;
            state.movies = results
            state.page = page
        })

})

const {reducer:movieReducer} = movieSlice

const movieAction = {
    getAll,search
}

export {
    movieReducer,
    movieAction
}