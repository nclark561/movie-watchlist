import React from "react";
import { MovieCard } from "./MovieCard";

export const Watchlist = (props) => {
  const { watchlist, removeMovie } = props;

  const movieDisplay = watchlist.map((movie) => {
    return (
      <MovieCard
        movie={movie}
        removeMovie={removeMovie}
        watchlist={watchlist}
      />
    );
  });

  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};
