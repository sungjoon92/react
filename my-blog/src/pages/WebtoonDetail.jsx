import React from "react";
import { useLocation, useParams } from "react-router-dom";
function WebtoonDetail() {
  const { webtoonId } = useParams();

  // ***useLocation***
  // pathname : 현재경로
  // search: 쿼리파아미터
  // hash: (#)해시 를 가지고있음

  // useLocation을 통해 상태 정보를 가져옵니다.
  const location = useLocation();
  // location.state가 있는지 확인
  const { week } = location.state;
  // state 정보 함수에 저장
  const { title, content, img } = week;

  
  return (
    <ul>
      <a href="">
        <li>
          <img src={img} alt="이미지" />
          <p>{content}</p>
        </li>
      </a>
    </ul>
  );
}

export default WebtoonDetail;
