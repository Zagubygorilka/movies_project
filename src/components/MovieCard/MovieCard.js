import StarRatings from "react-star-ratings/build/star-ratings";
import css from "./MovieCard.module.css"

const MovieCard = ({state}) => {
    const {backdrop_path,original_title,vote_average,overview} = state

    return (
        <div className={css.MovieCard}>
            <div><img src={`https://image.tmdb.org/t/p/w500//${backdrop_path}`} alt={'poster'}/></div>
            <h3>{original_title}</h3>
            <div><StarRatings
                rating={vote_average}
                starDimension="20px"
                starSpacing="5px"
                numberOfStars={10}
            /></div>
            <h4>{overview}</h4>
        </div>
    );
};

export default MovieCard;