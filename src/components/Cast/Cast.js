import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/moviesApi';
import notFound from 'images/image_not_found.jpg';

const Cast = () => {
  const { itemId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fetchCast() {
      try {
        const cast = await getMovieCredits(itemId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [itemId]);

  const poster = `https://image.tmdb.org/t/p/w200`;

  return (
    <div>
      {cast && (
        <ul>
          {cast.cast.length > 0 ? (
            cast.cast.map(({ id, profile_path, name, character }) => (
              <li key={id}>
                <img
                  src={profile_path ? poster + profile_path : notFound}
                  alt={name}
                />
                <p>{name}</p>
                <p>Character: {character ? character : 'Without character'}</p>
              </li>
            ))
          ) : (
            <p>Information not found</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default Cast;