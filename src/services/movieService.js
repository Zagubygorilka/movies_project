import {apiService} from "./apiService";
import {urls} from "../config/urls";


const movieService = {
    getAll: (page=1) => apiService.get(urls.movies.movies, {params:{page}}),
    search:(query)=>apiService.get(urls.movies.searchByQuery(`${query}`))
}

export {movieService}