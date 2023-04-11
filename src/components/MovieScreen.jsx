import React from "react";
import { MovieCard } from "./MovieCard";

export const MovieScreen = (props) => {
  const { watchlist, page, setPage, movieList } = props;

  const movieDisplayed = movieList.map((movie) => {
    return (
        <MovieCard movie={movie}/>
    )
  });

  return (
    <div className="page">
      <h1>Noah's Movie Theater</h1>
      <h3>Add a movie to your watchlist.</h3>
      <div className="movie-container">
        {movieDisplayed}
      </div>
    </div>
  );
};
