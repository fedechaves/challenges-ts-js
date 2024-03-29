/* eslint-disable react/prop-types */
export function ListMovies  ({  movies }) {

    return (
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))}
      </ul>
    )
  }
  
  export function NoResults() {
    return (
      // eslint-disable-next-line react/no-unescaped-entities
      <p>Haven't find any movies for this search</p>
    )
  }
  
  export function Movies ({ movies }) {
    const hasMovies = movies?.length > 0
  
    return (
      hasMovies 
      ? <ListMovies movies={movies} /> 
      : <NoResults />
    )
  }
  
