import React from "react";
import { MovieCard } from "./MovieCard";

export const MovieScreen = (props) => {
  const { watchlist, page, setPage, movieList, addMovie, removeMovie } = props;

  const movieDisplayed = movieList.map((movie) => {
    return (
      <MovieCard
        movie={movie}
        addMovie={addMovie}
        removeMovie={removeMovie}
        watchlist={watchlist}
      />
    );
  });

  const decrement = () => {
    setPage(prev => prev - 1)
  }

  const increment = () => {
    setPage(prev => prev + 1)
  }

  return (
    <div className="page">
      <h1>Noah's Movie Theater</h1>
      <h3>Add a movie to your watchlist.</h3>
      <div className="btn-container">
        <button onClick={page !== 1 && decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplayed}</div>
    </div>
  );
};
