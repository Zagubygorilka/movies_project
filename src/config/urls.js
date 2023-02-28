

const baseURL = 'https://api.themoviedb.org/3'

const movies = '/discover/movie'
const search = '/search/keyword?query='

const urls = {
    movies: {
        movies,
        searchByQuery:(query)=>`${search}${query}`,
        searchById:(id)=>`/find/${id}`
    }
};

export {
    baseURL, urls
}
