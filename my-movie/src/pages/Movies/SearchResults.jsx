import React, { useEffect, useState } from "react";
import movieAPI from "../../api/movieAPI";
import { useParams } from "react-router-dom";
import { useLoading } from "../../LoadingContext";

function SearchResults() {
  const { title } = useParams();
  const [SearchResult, setSearchResult] = useState(null); // 초기값을 null로 변경

  const { setIsLoading } = useLoading();

  useEffect(() => {
    async function searchMovies() {
      setIsLoading(true); // 로딩 시작
      try {
        const data = await movieAPI.getMovieSearch(title);
        setSearchResult(data.results); // 검색 결과 저장
      } catch (error) {
        console.error("Error fetching movies:", error);
        setSearchResult([]); // 오류 발생 시 빈 배열로 설정
      } finally {
        setIsLoading(false); // 로딩 종료
      }
    }
    searchMovies();
  }, [title, setIsLoading]);

  if (SearchResult === null) {
    // 데이터 요청 중
    return null;
  }

  if (SearchResult.length === 0) {
    // 검색 결과가 없을 때
    return <div className="nosearch">검색 결과가 없습니다. "{title}"</div>;
  }

  return (
    <div>
      {SearchResult.map((movie) => (
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
