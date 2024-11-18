import React, { useEffect, useState } from "react";
import movieAPI from "../api/movieAPI";
function Home() {
  // movies 스테이트 만들기
  const [NowPlayings, setNowPlayings] = useState([]);
  const [Populars, setPopulars] = useState([]);
  const [TopRateds, setTopRateds] = useState([]);

  useEffect(() => {
    async function NowPlaying() {
      try {
        // NowPlaying 데이터 확인
        const NowPlayingData = await movieAPI.getNowPlaying();

        // useState movies 주입
        setNowPlayings(NowPlayingData.results);
      } catch (error) {
        console.error("에러났다!!", error);
      }
    }
    NowPlaying();
  }, []);

  useEffect(() => {
    async function Popular() {
      try {
        // Popular 데이터 확인
        const PopularData = await movieAPI.getPopular();

        console.log(PopularData);
        // useState movies 주입
        setPopulars(PopularData.results);
      } catch (error) {
        console.error("에러났다!!", error);
      }
    }
    Popular();
  }, []);

  useEffect(() => {
    async function TopRated() {
      try {
        // TopRated 데이터 확인
        const TopRatedData = await movieAPI.getTopRated();

        // useState movies 주입
        setTopRateds(TopRatedData.results);
      } catch (error) {
        console.error("에러났다!!", error);
      }
    }
    TopRated();
  }, []);

  return (
    // 영화 데이터 표시
    <>
      <div>
        <h2>Now Playing</h2>
        <ul className="movie-list">
          {NowPlayings.map((movie) => (
            <a href="/" key={movie.id}>
              <li className="movie-item">
                <h3>{movie.title}</h3>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                />
                <p></p>
              </li>
            </a>
          ))}
        </ul>

        <h2>Popular</h2>
        <ul className="movie-list">
          {Populars.map((movie) => (
            <a href="/" key={movie.id}>
              <li className="movie-item">
                <h3>{movie.title}</h3>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                />
                <p>{movie.popularity}</p>
              </li>
            </a>
          ))}
        </ul>

        <h2>Top Rated</h2>
        <ul className="movie-list">
          {TopRateds.map((movie) => (
            <a href="/" key={movie.id}>
              <li className="movie-item">
                <h3>{movie.original_name}</h3>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.original_name}
                />
                <p>{movie.vote_average}</p>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
