import React, { useEffect } from "react";
import axios from "axios";
function MovieList() {
  //axios 방식

  // useEffect(() => {
  //   async function movieList(e) {
  //     const url =
  //       "https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1";
  //     const respons = await axios.get(url, {
  //       method: "GET",
  //       headers: {
  //         accept: "application/json",
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjdlNWViNjIwZDZkMjhhMGE4MjBhMTUzNTBmMjk4OSIsIm5iZiI6MTczMTkwODk0MS41NDczOTQ4LCJzdWIiOiI2NzFlZTAyYjQ1NDJlMzcxZmUwYjAxYTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dE_dGFpAsuZMAheKG3HiwBjmEySdDuGokRkCH4v0Jbs",
  //       },
  //     });
  //     // 응답 데이터 확인
  //     const data = respons.data;
  //     const results = data.results;
  //     console.log(results);
  //   }
  //   movieList();
  // }, []);

  return (
    <>
      <div>MOVIE LIST</div>
    </>
  );
}
export default MovieList;
