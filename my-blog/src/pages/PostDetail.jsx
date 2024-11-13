import React from "react";
import { useLocation, useParams } from "react-router-dom";
function PostDetail() {
  const { postId } = useParams();

  // ***useLocation***
  // pathname : 현재경로
  // search: 쿼리파아미터
  // hash: (#)해시 를 가지고있음
  const location = useLocation();
  const { post } = location.state;
  console.log(post);

  const { title, content } = post;
  return (
    <div>
      postId{title}번째 게시글
      <p>{content}</p>
    </div>
  );
}

export default PostDetail;
