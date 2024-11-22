import React, { useState } from "react";
import movieAPI from "../api/movieAPI";
import SearchValue from "./searchResults";
function Search() {
  const [isHovered, setIsHovered] = useState(false);
  // 검색창 마우스 hover
  const [isFocus, setIsFocus] = useState(false);
  const [searchValue, setSearchValue] = useState(""); // 입력값 상태
  const [searchResults, setSearchResults] = useState([]); // 검색 결과 상태
  // 검색어 입력
  const handleSearch = async () => {
    if (searchValue.trim() === "") {
      alert("검색어를 입력하세요!");

      return <searchResults searchResults={searchResults}></searchResults>;
    }

    try {
      const data = await movieAPI.getMovieSearch(searchValue);
      setSearchResults(data.results); // 검색 결과 업데이트
      console.log(data);
    } catch (error) {
      console.error("검색 오류:", error);
    }
  };
  // 검색창 스타일
  const inputStyle = {
    border: isHovered || isFocus ? "" : "none",
    padding: "1%",
    transition: "0.5s",
  };

  /* 검색창 */
  return (
    <>
      <div className="serach">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onClick={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={inputStyle}
          placeholder="영화를 검색하세요"
          autoFocus
        />

        <div>
          <button
            onClick={handleSearch} // 검색
          >
            검색
          </button>
        </div>
      </div>

    </>
  );
}

export default Search;
