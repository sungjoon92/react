// api.js
import api from "./axios";
// now_playing 리스트
const ko = "?language=ko";
const page = "&page=1";

const movieAPI = {
  // 범용적
  getMovies: async (category) => {
    const response = await api.get(`/movie/${category + ko + page}`);
    return response.data;
  },

  // 영화 디테일 페이지
  getMovieById: async (movieId) => {
    const response = await api.get(`/movie/${movieId + ko + page}`);
    return response.data;
  },
  // 영화 디테일 리뷰
  getMovieReviewsById: async (movieId) => {
    const response = await api.get(`/movie/${movieId}/reviews`);
    return response.data;
  },
  // 영화 검색
  getMovieSearch: async (title) => {
    const response = await api.get(`/search/movie`, {
      params: { query: title, language: "en-US", page: "1" },
    });
    return response.data;
  },
};
export default movieAPI;
