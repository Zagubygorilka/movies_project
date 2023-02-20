import axios from "axios";
import {baseURL} from "../config/urls";

const apiService = axios.create({baseURL})

apiService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjEwODg4OWE0ZDlhNTc5NWZhZGNhNWNkMzA3YjFmZCIsInN1YiI6IjYzNGJmNjYwMTA4OWJhMDA3YWIzMjU3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RBYRjVOHv2Z7H8VPea_ZFld41VlQgyJ-3TltEjajIXg`;
    return config
})

export {
    apiService
}