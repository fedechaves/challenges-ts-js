import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'


function App() {
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search })  

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies(search)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
  }

  return (
    <>
      <h1 style={{ alignSelf: "center"}}>Movie Finder</h1>
      <header >
        <form className='form' onSubmit={handleSubmit}>
          <label name="movie">Movie:</label>
          <input onChange={handleChange} value={search} name="movie" placeholder='Matrix, avengers...'/>          
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
