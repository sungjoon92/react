import api from "./axios";
const ENDPOINT = "/posts";
const post2Api = {
  // 내가 작성한 게시글 리스트 GET
  getMyPosts: async (params = {}) => {
    const response = await api.get(`/my/posts`, { params });
    return response;
  },

  // POST
  createPost: async (formData) => {
    const response = await api.post(`${ENDPOINT}/post2`, formData);
    return response;
  },
};

export default post2Api;
