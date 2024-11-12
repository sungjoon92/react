import React from "react";
import { useLocation, useParams } from "react-router-dom";
function NovelDetail() {
  const { novelId } = useParams();
  console.log(novelId);

  // ***useLocation***
  // pathname : 현재경로
  // search: 쿼리파아미터
  // hash: (#)해시 를 가지고있음
  const location = useLocation();
  const { novel } = location.state;
  // console.log(noval);

  const { title, content, img } = novel;

  return (
    <ul>
      <li>
        <img src={{}} alt="" />
        <p>{content}</p>
      </li>
    </ul>
  );
}

export default NovelDetail;
