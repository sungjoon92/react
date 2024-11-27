import React, { useEffect, useState } from "react";
import movieAPI from "../../api/movieAPI";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useLoading } from "../../LoadingContext";
function SearchResults() {
  // 수정: 직접 검색 파라미터 읽기
  const [searchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState(null);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    async function searchMovies() {
      const title = searchParams.get("title"); // 'query' 파라미터 가져오기

      setIsLoading(true);
      try {
        const data = await movieAPI.getMovieSearch(title);
        setSearchResult(data.results);
      } catch (error) {
        console.error("또 에러야?:", error);
        setSearchResult([]); // 오류 발생 시 빈 배열
      } finally {
        setIsLoading(false);
      }
    }

    searchMovies();
  }, [searchParams, setIsLoading]); // 수정: searchParams를 종속성 배열에 추가

  if (searchResult === null) {
    return null; // 로딩 중
  }

  if (searchResult.length === 0) {
    return (
      <div className="nosearch">
        검색 결과가 없습니다. "{searchParams.get("title")}"
      </div>
    );
  }

  return (
    <div id="movie-container">
      <h2 className=" movie-list-title">검색결과</h2>
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
