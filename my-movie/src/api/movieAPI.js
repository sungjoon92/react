// api.js
import api from "./axios";
// now_playing 리스트
const now_playing = "/now_playing";
const popular = "/popular";
const topRated = "/top_rated";
const ko = "?language=ko";
const page = "&page=1";

const movieAPI = {
  // 현재 상영작
  getNowPlaying: async () => {
    const response = await api.get(`${now_playing + ko + page}`);
    return response.data;
  },

  // 인기도순
  getPopular: async () => {
    const response = await api.get(`${popular + ko + page}`);
    return response.data;
  },

  // 최고등급
  getTopRated: async () => {
    const response = await api.get(`${topRated + ko + page}`);
    return response.data;
  },

  // 범용적
  getMovies: async (category) => {
    const response = await api.get(`${category + ko + page}`);
    return response.data;
  },

  // 영화 디테일 페이지
  getMovieById: async (movieId) => {
    const response = await api.get(`/${movieId + ko + page}`);
    return response.data;
  },
};
export default movieAPI;
