import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import movieAPI from "../../api/movieAPI";
function NowPlaying() {
  const { category } = useParams();
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await movieAPI.getMovies(category);
        setMovie(data.results);
      } catch (error) {
        console.error("에러 그만해~", error);
      }
    }
    fetchMovies();
  }, [category]);

  function translate(category) {
    return category
      .replaceAll("_", " ") // 모든 `_`를 공백으로 변환
      .toLowerCase() // 전체를 소문자로 변환
      .replace(/\b\w/g, (char) => char.toUpperCase()); // 단어의 첫 글자만 대문자로
  }
  return (
    <>
      <div id="movie-container">
        <div className="movie-list-title">
          <h2>{translate(category)}</h2>
        </div>
        <ul className="movie-list category">
          {movies.map((movie) => {
            return (
              <li className="movie-item" key={movie.id}>
                {/* 절대 경로로 변경 */}
                <Link to={`/movie/detail/${movie.id}`}>
                  <h3>{movie.title}</h3>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default NowPlaying;
