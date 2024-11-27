import React, { useEffect, useState } from "react";
import movieAPI from "../../api/movieAPI";
import { Link, useSearchParams } from "react-router-dom";
import { useLoading } from "../../LoadingContext";
function SearchResults() {
  // 수정: ""?"" 식으로 직접 검색 파라미터 읽기
  const [searchParams] = useSearchParams();
  // searchParams로 받은값 이용해 searchResult에 저장
  const [searchResult, setSearchResult] = useState([]);
  // 전역 로딩 가져오기
  const { setIsLoading } = useLoading();

  //타이틀 전역 변수로 설정
  const title = searchParams.get("title"); // 'query' 파라미터 가져오기
  useEffect(() => {
    async function searchMovies() {
      // 로딩시작
      setIsLoading(true);
      try {
        const data = await movieAPI.getMovieSearch(title);
        setSearchResult(data.results);
      } catch (error) {
        console.error("또 에러야?:", error);
        setSearchResult([]); // 오류 발생 시 빈 배열
      } finally {
        // 로딩 끝
        setIsLoading(false);
      }
    }

    searchMovies();
  }, [searchParams, setIsLoading]); // 수정: searchParams를 종속성 배열에 추가

  // 검색 결과가 없으면 null 값 반환
  if (searchResult === null) {
    return null;
  }

  // 검색 결과는 배열로 만들어지기에 검색결과가 의 배열값이 없으면  아래 결과 리턴
  if (searchResult.length === 0) {
    return (
      <div className="nosearch">
        검색 결과가 없습니다. "{searchParams.get("title")}"
      </div>
    );
  }

  return (
    <div id="movie-container">
      <h2 className=" movie-list-title">검색결과 : {title}</h2>
      <ul className="movie-list category">
        {searchResult.map((movie) => (
          <div key={movie.id}>
            <li className="movie-item" key={movie.movieId}>
              <Link to={`/movie/detail/${movie.id}`}>
                <h3>{movie.title}</h3>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
