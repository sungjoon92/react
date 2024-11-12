import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
function Novel() {
  const [novels, setNoval] = useState([
    {
      id: 1,
      title: "지상최대 공모전",
      content: "공포",
    },
    {
      id: 2,
      title: "시리즈 에디션",
      content: "코믹",
    },
    {
      id: 3,
      title: "베스트리그",
      content: "스릴러",
    },
    {
      id: 4,
      title: "챌린지리그",
      content: "개꿀잼",
    },
    {
      id: 5,
      title: "슈퍼캐스팅",
      content: "판타지",
    },
    {
      id: 6,
      title: "MY",
      content: "배고프다",
    },
    {
      id: 7,
      title: "작품모음집",
      content: "내일은 월요일",
    },
  ]);
  return (
    <>
      <div>
        <h2>소설</h2>
        <ul className="novel-menu">
          {novels.map((novel) => {
            return (
              <li key={novel.id}>
                <Link to={`/novel/${novel.id}`} state={{ novel }}>
                  <p>{novel.title}</p>
                </Link>
                {/* {console.log(noval)} */}
              </li>
            );
          })}
        </ul>
      </div>
      {/* 선택한 웹툰의 세부 정보 */}
      <div className="detail-content">
        <Outlet />
      </div>
    </>
  );
}

export default Novel;
