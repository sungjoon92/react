import Axios from "axios";
import { replace } from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
export default function PostDetail() {
  const { postId } = useParams();

  // fatch 에 사용
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  //store 방식
  // const posts = useSelector((state) => state.posts);
  // // console.log(posts);

  // // const location = useLocation();

  // // const { post } = location.state;
  // // const { title, content } = post;
  // const [post, setPost] = useState();
  // // postId와 일치하는 게시글 찾기
  // // const post = posts.find((post) => post.id === parseInt(postId));
  // useEffect(() => {
  //   setPost(posts.find((post) => post.id === parseInt(postId)));
  // }, []);

  /////////////////////////////////////////////////////////////////////////////////////

  // fatch방식;
  useEffect(() => {
    const url = `http://localhost:3000/posts/${postId}`;
    async function fetchPost() {
      try {
        const respons = await Axios.get(url);
        // const respons = await Axios({ url: url });

        const data = respons.data;
        setPost(data);
      } catch (err) {
        // 뒤로가기 누를시 바로전 페이지로 가게되어 err재실행으로 무한루프가되는데
        //  { replace: true } 사용시 그전페이지로 이동
        navigate("/NotFound", { replace: true });
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, []);
  if (loading) {
    return <div>로딩중이야~</div>;
  }
  return (
    <div>
      detail
      <h3>{post?.title}</h3>
      <p>{post?.content}</p>
    </div>
  );
}
