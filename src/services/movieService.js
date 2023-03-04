import {apiService} from "./apiService";
import {urls} from "../config/urls";


const movieService = {
    getAll: (page=1) => apiService.get(urls.movies.movies, {params:{page}}),
    search:(query)=>apiService.get(urls.movies.searchByQuery(`${query}`)),
    searchById:(id)=>apiService.get(urls.movies.searchById(`{external_${id}}`))
}

export {movieService}