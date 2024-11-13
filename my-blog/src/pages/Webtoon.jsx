import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import webtoons from "../json/webtoons.json";
function Webtoon() {
  // const [webtoons, setWebtoons] = useState([
  //   {
  //     id: 1,
  //     title: "월요웹툰",
  //     content: "공포",
  //     img: "https://image-comic.pstatic.net/webtoon/758037/thumbnail/thumbnail_IMAG21_15cb2611-34c0-4f02-a689-41d0b1016579.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "화요웹툰",
  //     content: "코믹",
  //     img: "https://image-comic.pstatic.net/webtoon/830015/thumbnail/thumbnail_IMAG21_3591064c-2ca1-41fc-88f5-2cf57f27b1d3.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "수요웹툰",
  //     content: "스릴러",
  //     img: "https://image-comic.pstatic.net/webtoon/774866/thumbnail/thumbnail_IMAG21_b03cd4bd-bc74-4469-a501-20896bcc887f.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "목요웹툰",
  //     content: "개꿀잼",
  //     img: "https://image-comic.pstatic.net/webtoon/183559/thumbnail/thumbnail_IMAG21_5f3fec31-5c95-4afe-a73f-3046288edb47.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "금요웹툰",
  //     content: "판타지",
  //     img: "https://image-comic.pstatic.net/webtoon/822657/thumbnail/thumbnail_IMAG21_99e49512-e05d-48c3-846d-d898f78523df.jpg",
  //   },
  //   {
  //     id: 6,
  //     title: "토요웹툰",
  //     content: "배고프다",
  //     img: "https://image-comic.pstatic.net/webtoon/602910/thumbnail/thumbnail_IMAG21_e861f2cf-6157-4d33-8e02-7b4cbf0a8baf.jpg",
  //   },
  //   {
  //     id: 7,
  //     title: "일요웹툰",
  //     content: "내일은 월요일",
  //     img: "https://image-comic.pstatic.net/webtoon/796075/thumbnail/thumbnail_IMAG21_31f75c4c-81c9-454a-8d92-9e23b577e1a5.jpg",
  //   },
  // ]);

  // webtoons.json 서버 fetch 사용

  useEffect(() => {
    fetch("http://localhost:3000/webtoons")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(response);
        return response.json();
      })
      .then((data) => setWebtoons(data))
      // .then((data) => webtoons = data)
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [webtoons, setWebtoons] = useState([]);

  // 로직
  function MouseClick(event) {
    let menuList = document.querySelectorAll(".webtoon-menu > li > a > p");
    const target = event.target;
    // let color = "";
    // target.style.backgroundColor = color === "red" ? "white" : "red";

    menuList.forEach((e) => {
      console.log(e);

      e.className = "";
      e.style.fontSize = "1.1rem";

      target.className = "bg-red";
      target.style.fontSize = "1.1rem";
    });
  }
  return (
    <>
      <div className="webtoon">
        <h2>웹툰</h2>
        <ul className="webtoon-menu">
          {webtoons.map((week) => {
            return (
              <li key={week.id} onClick={MouseClick}>
                {/* 상대경로도 가능 */}
                <Link to={`${week.id}`} state={{ week }}>
                  <p>{week.title}</p>
                </Link>
                {console.log(week)}
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

export default Webtoon;
