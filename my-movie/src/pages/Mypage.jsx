import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Mypage() {
  const isLike = useSelector((state) => state.isLike);
  console.log(isLike);

  // 좋아요한 영화들만 필터링해서 출력
  const likedMovies = Object.values(isLike).filter((movie) => movie.liked); // liked가 true인 영화만 필터링

  return (
    <div id="movie-container">
      <h2 className="mypage-title movie-list-title">My page</h2>
      {/* 좋아요한 영화 목록 출력 */}
      <div>
        <ul className="movie-list category">
          {likedMovies.length > 0 ? (
            likedMovies.map((movie) => (
              <li className="movie-item" key={movie.movieId}>
                <h3>{movie.data.title}</h3>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.data.poster_path}`}
                  alt={movie.data.title}
                />
              </li>
            ))
          ) : (
            <p>좋아요한 영화가 없습니다.</p>
          )}
        </ul>
      </div>
    </div>
  );
}
export default Mypage;
