import { createSlice } from "@reduxjs/toolkit";

// 초기 상태: 좋아요가 설정된 영화는 객체 형태로 관리
const initialState = {};

const isLikeSlice = createSlice({
  name: "isLike",
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const { id, movieData } = action.payload; // payload로 movieId와 movieData를 받아옵니다.

      if (state[id]) {
        // 이미 좋아요가 되어 있으면 취소
        state[id] = false;
      } else {
        // 좋아요 상태로 설정
        state[id] = true;
        // 영화 데이터를 저장
        state[id] = {
          movieId: id,
          data: movieData,
          liked: true, // 좋아요 상태
        };
      }
    },
  },
});

export const { toggleLike } = isLikeSlice.actions;
export default isLikeSlice.reducer;
