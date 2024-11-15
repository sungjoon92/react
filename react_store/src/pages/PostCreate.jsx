import React, { useEffect } from "react";
import { useState } from "react";
import { addPost } from "../store/slices/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function PostCreate() {
  const { isLoggedIn } = useSelector((state) => state.login);
  const [formDate, setFormDate] = useState({ title: "", content: "" });

  // 생성, 수정, 삭제를위한 리듀서 문법
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 최초 한번, 또는 dependency가 바뀌었을 때

  // url을 통한 위치로 강제이동시 loginSlice에 있는 초기 state상태로 설정됨
  // 현재값은 true시 로그인하지않아도 가능 false시 로그인상관없이 불가능
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  function handleChange(e) {
    // 우리의 state를 변경하고 싶어.
    // input의 value를 우리의 state에 넣고 싶어.
    const inputValue = e.target.value;
    const key = e.target.name;
    // data = new FormData(form);
    setFormDate({
      // title: inputValue,
      // content: formDate.content,
      ...formDate, //위에꺼 대신에 이거씀
      [key]: inputValue,
    });
  }

  // store 방식
  // function handleSubmit(e) {
  //   e.preventDefault();

  //   const id = Date.now(); // 임시 id`

  //   console.log(formDate);
  //   dispatch(addPost({ ...formDate, id }));
  //   navigate(`/posts/${id}`);
  // }

  //axios 방식
  function handleSubmit(e) {
    e.preventDefault();
    async function createPost() {
      const url = `http://localhost:3000/posts`;
      const respons = await axios.post(url, formDate);
      const data = respons.data;
      const id = data.id;
      navigate(`/posts/${id}`);
    }
    createPost();
  }

 
  return (
    <div>
      <h3>PostCreate</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="title">글 제목</label>
        <input
          type="text"
          id="title"
          name="title"
          autoFocus
          onChange={handleChange}
        />
        <label htmlFor="content">
          글 내용:
          <textarea id="content" name="content" onChange={handleChange} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default PostCreate;
