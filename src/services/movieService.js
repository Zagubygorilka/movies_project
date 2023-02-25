import {apiService} from "./apiService";
import {urls} from "../config/urls";


const movieService = {
    getAll: () => apiService.get(urls.movies.movies),
}

export {movieService}