import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { getTrendingMovies } from 'services/moviesApi';

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setLoading(true);
      try {
        const itemsData = await getTrendingMovies();
        setItems(itemsData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);
  return (
    <main>
      {loading && <Loader />}
      <ul>
        {items.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title || name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;