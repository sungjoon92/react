import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "첫 번째 프로젝트",
    content:
      "간단한 Todo 앱을 만들었습니다. UI 구성과 상태 관리의 중요성을 배웠습니다.",
  },
  {
    id: 2,
    title: "리액트와 함께한 성장",
    content:
      "리액트를 이용해 컴포넌트 기반 개발을 익히고 재사용성을 높이는 방법을 배웠습니다.",
  },
  {
    id: 3,
    title: "팀 프로젝트 경험",
    content:
      "팀 프로젝트에서 협업하여 일정 관리 앱을 개발했고, Git을 활용한 버전 관리와 코드 리뷰의 중요성을 배웠습니다.",
  },
];

const postsSlice = createSlice({
  name: "posts", // 변수명
  initialState, // 데이터
  reducers: {
    addPost: (state, action) => {
      // 리스트에 push(새로운 데이터)
      state.push(action.payload); // payload = input값들
    },
    // removePost: () => {},
  }, // 세터
});

// 생성, 수정, 삭제하기위한 문법
export const { addPost, removePost } = postsSlice.actions;

export default postsSlice.reducer;

// 생성
// store를 쓰고싶다
//   slice에 정의
//     변경을 위한 reducer 정의
//   store에 등록

// 사용할 때 :useSelector
// 변경할 때 :reducer만을 통해서
//           useDispatch를 통해 reducer를 call
