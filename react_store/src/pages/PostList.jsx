import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function PostList() {
  const navigate = useNavigate();

  const posts = useSelector((state) => state.posts);

  // function logincheck(e) {
  //   if (!flag) {
  //     e.preventDefault(); // 링크 이동 방지
  //     alert("로그인하세유");
  //   } else {
  //     navigate(`/posts/create`); // 로그인되어 있을 때만 이동
  //   }
  // }
  return (
    <div>
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
