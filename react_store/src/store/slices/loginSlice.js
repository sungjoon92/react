import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login", // 변수명
  initialState, // 데이터
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
    },
  }, // 세터
});

// 생성, 수정, 삭제하기위한 문법
export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;

// 생성
// store를 쓰고싶다
//   slice에 정의
//     변경을 위한 reducer 정의
//   store에 등록

// 사용할 때 :useSelector
// 변경할 때 :reducer만을 통해서
//           useDispatch를 통해 reducer를 call
