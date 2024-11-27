import React, { useEffect, useState } from "react";
import movieAPI from "../api/movieAPI";
import { Link, useNavigate } from "react-router-dom";
import { isNil } from "lodash";
function Search() {
  const [searchValue, setSearchValue] = useState(""); // 입력값 상태
  const [SearchResult, setSearchResult] = useState([]);

  // 검색창 마우스 hover
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function searchInput() {
      try {
        const data = await movieAPI.getMovieSearch(searchValue);
        setSearchResult(data.results);
        console.log(SearchResult);
      } catch (error) {
        console.log(error);
      }
    }
    searchInput();
  }, [searchValue]);

  // 검색어 입력
  function handleSearch() {
    // ul선택
    const searchValueList = document.querySelector(".search-value-list");
    // submit시 ul 안보이게
    searchValueList.style.display = "none";

    if (searchValue.trim() === "" || null) {
      // e.preventDefault(); // 기본 동작 막기
      alert("검색어를 입력하세요!");
      return false;
    } else {
      navigate(`/movie/search?title=${searchValue}`);
      // window.location.href = `/movie/search/${searchValue}`;
    }
  }

  // 검색후 li의 값을
  function searchChange(value) {
    // searchValue에 넣음
    setSearchValue(value);
    navigate(`/movie/search?title=${searchValue}`);
  }

  /* 검색창 */
  return (
    <>
      <div className="search">
        <div className="search-list">
          <form
            action=""
            method="get"
            onSubmit={(e) => {
              // submit 기본속성 삭제
              e.preventDefault();
            }}
          >
            {/* 검색입력창 */}
            <input
              type="text"
              className="search-input"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="영화를 검색하세요"
              autoFocus
            />

            {/* 검색완료버튼 */}
            <input
              className="submit"
              type="submit"
              value={"검색"}
              onClick={(e) => handleSearch(e.target.value)}
            />
          </form>

          {/* 검색값이 있을 때만 리스트를 보여줌*/}
          {searchValue && (
            <ul className="search-value-list">
              {SearchResult.map((movie, index) => (
                <li
                  key={index}
                  /* 검색 li hover시 클래스부여*/
                  className={`search-item ${hovered === index ? "hover" : ""}`}
                  onMouseOver={() => setHovered(index)} // index를 저장
                  onMouseOut={() => setHovered(null)} // 초기화
                  onClick={(e) => searchChange(e.target.textContent)} // 텍스트 콘텐츠 전달
                >
                  {movie.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Search;