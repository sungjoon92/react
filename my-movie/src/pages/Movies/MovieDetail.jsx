import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieAPI from "../../api/movieAPI";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../store/slices/isLikeSlice";
function MovieDetail() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [movieReview, setMovieReview] = useState([]);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const isLike = useSelector((state) => state.isLike[movieId]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const movieData = await movieAPI.getMovieById(movieId);
        const reviewData = await movieAPI.getMovieReviewsById(movieId);

        setMovie(movieData);
        setMovieReview(reviewData.results);

        console.log(reviewData);
        console.log(reviewData.results);
      } catch (error) {
        console.error("에러 그만해~", error);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  // 로그인 체크 및 좋아요 상태 토글
  function loginCheck() {
    if (!isLoggedIn) {
      alert("로그인 해주세요!");
      return false;
    }
    dispatch(toggleLike({ id: movieId, movieData: movie })); // 로그인 후 좋아요 상태 토글
  }
  return (
    <>
      <div className="movie-detail">
        <div className="movie-detail-box">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt={movie?.title}
          />
        </div>

        <div className="movie-detail-textbox">
          <h2 className="movie-detail-title">{movie?.title}</h2>
          <p>{movie?.overview}</p>
          <button className="islike-button" onClick={() => loginCheck()}>
            {isLike ? "찜하기 취소" : "찜하기"}
          </button>
        </div>
      </div>
      <div className="review">
        <h2>Review</h2>
        {movieReview.map((e) => {
          return <div>{e.content}</div>;
        })}
      </div>
    </>
  );
}

export default MovieDetail;
