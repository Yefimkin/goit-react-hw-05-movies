import { useState, useEffect } from 'react';
import { getMovieDetails } from 'services/moviesApi';
import { useParams } from 'react-router-dom';

export const useFetchItem = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [release, setRelease] = useState('');
  const [genres, setGenres] = useState([]);
  const [rating, setRating] = useState('');

  const { itemId } = useParams();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setLoading(true);
      try {
        const itemData = await getMovieDetails(itemId);
        const { title, release_date, genres, vote_average } =
          itemData;

        const releaseDate = release_date.slice(0, 4);
        const itemGenres =
          genres.length > 0 ? (
            <p>{genres.map(genre => genre.name).join(', ')}</p>
          ) : (
            <p>No genres found</p>
          );
        const itemRange = vote_average || 'No rating yet';

        setItem(itemData);
        setTitle(title);
        setRelease(releaseDate);
        setGenres(itemGenres);
        setRating(itemRange);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, [itemId]);
  return { item, loading, title, release, genres, rating };
};