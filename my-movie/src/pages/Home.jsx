import React, { useEffect, useState } from "react";
import movieAPI from "../api/movieAPI";
import { Link } from "react-router-dom";
function Home() {
  // movies 스테이트 만들기
  const [NowPlayings, setNowPlayings] = useState([]);
  const [Populars, setPopulars] = useState([]);
  const [TopRateds, setTopRateds] = useState([]);

  const movies = [
    { title: "Now Playing", data: NowPlayings },
    { title: "Populars", data: Populars },
    { title: "Top Rated", data: TopRateds },
  ];

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
      {movies.map((section) => (
        <div id="movie-container" key={section.title}>
          <h2>{section.title}</h2>
          <ul className="movie-list">
            {section.data.map((movie) => (
              <li className="movie-item" key={movie.id}>
                <Link to="./MovieDetail">
                  <a href="/">
                    <h3>{movie.title}</h3>
                    <img
                      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </a>
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
