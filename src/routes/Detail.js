import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = useParams();
  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovieDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading Movie Detail</h1>
      ) : (
        <div>
          <img src={movieDetail.large_cover_image} alt={movieDetail.title} />
          <h2>{movieDetail.title}</h2>
          <h3>Rating: {movieDetail.rating}</h3>
          <p>{movieDetail.description_full}</p>
          <ul>
            {movieDetail.genres &&
              movieDetail.genres.map((genre) => <li key={genre}>{genre}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
