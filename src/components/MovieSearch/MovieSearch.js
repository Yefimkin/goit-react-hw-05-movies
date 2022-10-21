import { useState, useEffect } from 'react';
import { fetchMovieByName } from 'services/moviesApi';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const currentItem = searchParams.get('query');

  async function searchMovie(movieName) {
    if (!movieName) {
      return;
    }
    setLoading(true);
    try {
      const movies = await fetchMovieByName(movieName);
      if (movies.length === 0) {
        alert('Movie not found');
        return;
      }
      setMovies(movies);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const formSearchSubmit = movieName => {
    setSearchParams({ query: movieName });
    searchMovie(movieName);
  };

  useEffect(() => {
    if (currentItem) {
      searchMovie(currentItem);
    }
  }, [currentItem]);

  return (
    <div>
      <SearchForm onSubmit={formSearchSubmit} />
      {loading && <Loader />}
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesPage;