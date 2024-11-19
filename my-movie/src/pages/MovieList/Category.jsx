import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieAPI from "../../api/movieAPI";

function NowPlaying() {
  const { category } = useParams();
  console.log(category);

  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      try {
        if (category === "this") {
        // if (만약 params에 잇던 카테고리가 now_p, pop, 이런게 아니면) {
        console.log(category);

          const data = await movieAPI.getNowPlaying();
          setMovie(data.results);
          // console.log(data.results);
        }
      } catch (error) {
        console.error("에러 그만해~", error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      {movie.map((el) => {
        console.log(el);

        <div>{el.title}</div>;
      })}
    </>
  );
}
export default NowPlaying;
