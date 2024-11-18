// api.js
import api from "./axios";
// now_playing 리스트
const now_playing = "/now_playing";
const popular = "/popular";
const topRated = "/top_rated";
const ko = "?language=ko";
const page = "&page=1";

const movieAPI = {
  getNowPlaying: async () => {
    const response = await api.get(`${now_playing + ko + page}`);
    return response.data;
  },
  getPopular: async () => {
    const response = await api.get(`${popular + ko + page}`);
    return response.data;
  },
  getTopRated: async () => {
    const response = await api.get(`${topRated + ko + page}`);
    return response.data;
  },
};
export default movieAPI;
