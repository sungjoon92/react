import React, { useEffect, useState } from "react";
import movieAPI from "../api/movieAPI";
import { Link, useNavigate } from "react-router-dom";
function Search() {
  const [isHovered, setIsHovered] = useState(false);
  // 검색창 마우스 hover
  const [isFocus, setIsFocus] = useState(false);
  const [searchValue, setSearchValue] = useState(""); // 입력값 상태
  const [SearchResult, setSearchResult] = useState([]);

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
    if (searchValue.trim() === "") {
      // e.preventDefault(); // 기본 동작 막기
      alert("검색어를 입력하세요!");
      return false;
    } else {
      navigate(`/movie/search?title=${searchValue}`);
      // window.location.href = `/movie/search/${searchValue}`;
    }
  }
  function searchChange(value) {
    setSearchValue(value);
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
            <input
              type="text"
              className="search-input"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onClick={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              placeholder="영화를 검색하세요"
              autoFocus
            />
            {/* <Link to={`/movie/search/${searchValue}`} onClick={handleSearch}>
              검색
            </Link> */}
            <input
              className="submit"
              type="submit"
              onClick={(e) => handleSearch(e.target.value)}
            />
          </form>

          {/* 검색값이 있을 때만 리스트를 보여줌*/}
          {searchValue && (
            <ul>
              {SearchResult.map((movie, index) => (
                <li
                  onClick={(e) => searchChange(e.target.textContent)}
                  key={index}
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
