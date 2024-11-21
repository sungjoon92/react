import React, { useEffect, useState } from "react";
import movieAPI from "../api/movieAPI";
import { Link } from "react-router-dom";

function Home() {
  // movies 스테이트 만들기
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState([]);

  const movieList = [
    { path: "now_playing", title: "Now Playing" },
    { path: "popular", title: "Popular" },
    { path: "top_rated", title: "Top Rated" },
  ];

  useEffect(() => {
    async function fetchAllMovies() {
      try {
        const movieData = await Promise.all(
          movieList.map(async (e) => {
            const data = await movieAPI.getMovies(e.path);
            return { title: e.title, path: e.path, data: data.results };
          })
        );
        setMovies(movieData);
      } catch (error) {
        console.error("에러 그만해~", error);
      }
    }

    fetchAllMovies();
  }, []); // 의존성 배열이 비어 있으므로 컴포넌트가 처음 렌더링될 때만 실행

  return (
    // 영화 데이터 표시
    <>
      {movies.map((section) => (
        <div id="movie-container" key={section.title}>
          <div className="movie-list-title">
            <h2>{section.title}</h2>
            {/* 카테고리 이동 */}
            <Link to={`./movie/category/${section.path}`}>더보기</Link>
          </div>
          <ul className="movie-list">
            {section.data.map((movie) => (
              <li className="movie-item" key={movie.id}>
                <Link to={`./movie/detail/${movie.id}`}>
                  <h3>{movie.title}</h3>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Home;
