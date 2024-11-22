import React from "react";
function searchResults(searchResults) {
  return (
    <div>
      <img
        key={searchResults.id}
        src={`https://image.tmdb.org/t/p/w300${searchResults.poster_path}`}
        alt={searchResults.title}
      />
      {console.log(searchResults.title)}
    </div>
  );
}

export default searchResults;
