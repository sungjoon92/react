import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

export default function PostDetail() {
  const { postId } = useParams();
  const posts = useSelector((state) => state.posts);
  // console.log(posts);

  // const location = useLocation();

  // const { post } = location.state;
  // const { title, content } = post;
  const [post, setPost] = useState();
  // postId와 일치하는 게시글 찾기
  // const post = posts.find((post) => post.id === parseInt(postId));
  useEffect(() => {
    setPost(posts.find((post) => post.id === parseInt(postId)));
  }, []);

  return (
    <div>
      detail
      <h3>{post?.title}</h3>
      <p>{post?.content}</p>
    </div>
  );
}
