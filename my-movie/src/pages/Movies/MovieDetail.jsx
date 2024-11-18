import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the movie ID
import movieAPI from "../../api/movieAPI";

function MovieDetail() {
  const { id } = useParams(); // Get movie ID from URL params
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const movieData = await movieAPI.getMovieDetail(id); // Fetch movie details using ID
        setMovie(movieData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }

    fetchMovieDetails();
  }, [id]); // Fetch movie details again if the ID changes

  return (
    <div>
      {/* <h2>{movie.title}</h2> */}
      {/* <p>{movie.overview}</p> */}
      <img
      // src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      // alt={movie.title}
      />
      {/* Add other movie details as needed */}
    </div>
  );
}

export default MovieDetail;
