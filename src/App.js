import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import { Header } from './components/Header';
import { MovieScreen } from './components/MovieScreen';
import { Watchlist } from './components/Wachlist';

function App() {
  const [movieList, setMovieList] = useState([])
  const [watchlist, setWatchlist] = useState([])
  const [page, setPage] = useState(1)

  const getData = () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then(res => setMovieList(res.data.results))
      .catch(err => console.log(err))
  }

  const addMovie = (movie) => {
    setWatchlist(prev => {
      return [...prev, movie]
    })
  }

  const removeMovie = (movie) => {
    const newState = watchlist.filter(e => e !== movie)
    setWatchlist(newState)
  }

  useEffect(() => {
    getData()
  }, [page])

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen watchlist={watchlist}
        page={page}
        setPage={setPage}
        movieList={movieList}
        addMovie={addMovie}
        removeMovie={removeMovie}
        />
        <Watchlist watchlist={watchlist} removeMovie={removeMovie}/>
      </main>
    </div>
  );
}

export default App;
