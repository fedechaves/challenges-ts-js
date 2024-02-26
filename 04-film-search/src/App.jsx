import './App.css'
import  movies from "./api/movies.json"
import noResults  from "./api/noResults.json"

function App() {
  const movieList = movies.Search
  const hasMovies = movieList?.length > 0

  return (
    <>
      <h1 style={{ alignSelf: "center"}}>Movie Finder</h1>
      <section >
        <form action="submit" className='form'>
          <label htmlFor="Movie" name="Movie">Movie:</label>
          <input type="text" name="movie" placeholder='Matrix, avengers...'/>
          <button>Search</button>
        </form>
      </section>

      <main>
        {
          hasMovies 
          ? (
            <ul>
             { 
                movieList.map( movie => (
                <li key={movie.imdbID}>
                  <h3>{movie.Title}</h3>
                  <span>{movie.Year}</span>
                  <img src={movie.Poster} alt="Movie portrait" />
                </li>
                ))
              }
              </ul> ) : ( <h1>404 not found</h1>
            )
        }
      </main>
    </>
  )
}

export default App
