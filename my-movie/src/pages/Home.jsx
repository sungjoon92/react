import React, { useEffect, useState } from "react";
import movieAPI from "../api/movieAPI";
import { Link } from "react-router-dom";

function Home() {
  // movies 스테이트 만들기
  const [NowPlayings, setNowPlayings] = useState([]);
  const [Popular, setPopular] = useState([]);
  const [TopRateds, setTopRateds] = useState([]);

  const movies = [
    { path: "now_playing", title: "Now Playing", data: NowPlayings },
    { path: "popular", title: "Popular", data: Popular },
    { path: "top_rated", title: "Top Rated", data: TopRateds },
  ];
  useEffect(() => {
    async function fetchAllMovies() {
      try {
        // Promise.all을 사용해 API를 병렬로 호출
        const [nowPlayingData, popularData, topRatedData] = await Promise.all([
          movieAPI.getNowPlaying(),
          movieAPI.getPopular(),
          movieAPI.getTopRated(),
        ]);

        // 상태 업데이트
        setNowPlayings(nowPlayingData.results);
        setPopular(popularData.results);
        setTopRateds(topRatedData.results);

        // 디버깅용 로그 출력
        // console.log("Now Playing:", nowPlayingData.results);
        // console.log("Popular:", popularData.results);
        // console.log("Top Rated:", topRatedData.results);
      } catch (error) {
        console.error("에러 발생:", error);
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
