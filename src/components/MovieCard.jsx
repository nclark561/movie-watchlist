import React from 'react'

export const MovieCard = (props) => {
    const {movie, addMovie, removeMovie, watchlist} = props

    const inWatchlist = watchlist.filter(mov => mov.id === movie.id)

    const button = inWatchlist.length === 0 ? <button onClick={() => addMovie(movie)}>Add to List</button> : <button onClick={() => removeMovie(movie)}>Remove</button>;

  return (
    <div className='movie-card'>
        <div>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
            <h3>{movie.original_title}</h3>
        </div>
        {button}
    </div>
  )
}

