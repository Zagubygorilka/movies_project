import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movieService";


const initialState = {
    movies: [],
    prev: null,
    next: null,
    errors: null,
    loading: null
} ;


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

const movieSlice = createSlice({
    name:'moviesSlice',
    initialState,
    reducers:{},
    extraReducers: builder => builder.addCase(getAll.fulfilled, (state, action) => {
        const {prev, next, items} = action.payload;
        state.cars = items
        state.prev = prev
        state.next = next
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