import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, rating, summary, genres, id }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h3>Rating: {rating}</h3>
      <p>{summary}</p>
      <ul>{genres && genres.map((genre) => <li key={genre}>{genre}</li>)}</ul>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
