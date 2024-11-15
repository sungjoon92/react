import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function PostList() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const posts = useSelector((state) => state.posts);
  useEffect(() => {
    async function fetchPost() {
      try {
        const url = "http://localhost:3000/posts";
        const respons = await Axios.get(url);
        // const respons = await Axios({ url: url });

        const data = respons.data;
        ``;
        setLoading(false);
        setPosts(data);
      } catch (err) {
        setLoading(false);
        setError("대체 어디가에러야 " + err.message);
        console.error(err);
        console.log("에러남ㅠㅠ");
      }
    }

    fetchPost();
  }, []);
  if (loading) {
    // let posts = document.querySelector(".posts");
    // posts.style.display = "none";
    return <div>로딩중</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="posts">
      <h2>posts</h2>
      <ul>
        {posts.map((post) => {
          const { id, title, content } = post;
          return (
            <li key={id}>
              <Link to={`/posts/${id}`} state={{ post }}>
                <h3>{title}</h3>
              </Link>
              <h3
                onClick={() => {
                  // 이동을 하고 싶다
                  navigate(`/posts/${id}`);
                }}
              >
                {title}
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
