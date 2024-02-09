import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import './App.css'
import { useState } from 'react'
import debounce from 'just-debounce-it'
import { useCallback } from 'react'


function App() {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })  

  const debouncedGetMovies = useCallback(
    debounce(search => {
    getMovies({ search })
  }, 300)
  , [getMovies]
  ) 

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <>
      <h1 style={{ alignSelf: "center"}}>Movie Finder</h1>
      <header >
        <form className='form' onSubmit={handleSubmit}>
          <label name="movie">Movie:</label>
          <input onChange={handleChange} value={search} name="movie" placeholder='Matrix, avengers...'/>  
          <input type="checkbox" checked={sort} onChange={handleSort}/>        
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red'}}>{error}</p> }
      </header>

      <main> 
        { loading ? <p>loading...</p> : 
        <Movies movies={movies} />}
      </main>
    </>
  )
}

export default App
