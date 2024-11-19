import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieAPI from "../../api/movieAPI";

function MovieDetail() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const movieData = await movieAPI.getMovieById(movieId); // Fetch movie details using ID
        setMovie(movieData);
      } catch (error) {
        console.error("에러 그만해~", error);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className="movie-detail">
      <div className="movie-detail-box">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie?.title}
        />
      </div>

      <div className="movie-detail-textbox">
        <h2 className="movie-detail-title">{movie?.title}</h2>
        <p>{movie?.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetail;
