import { NavLink, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Loader from 'components/Loader/Loader';
import { useFetchItem } from 'useFetchItem/useFetchItem';

const Link = styled(NavLink)`
  display: flex;
  gap: 10px;
`;

const MovieDetails = () => {
  const location = useLocation();
  const goBackURL = location?.state?.from ?? '/';

  const { item, loading, title, poster, release, genres, rating } =
    useFetchItem();

  return (
    <>
      {loading && <Loader />}
      {item && (
        <>
          <Link to={goBackURL}>Go back</Link>
          <hr />
          <img src={poster} alt={title} />

          <h1>
            {title} {release}
          </h1>
          <p>{`User Score: ${rating}`}</p>
          <h2>Overview</h2>
          <p>{item.overview}</p>
          <h2>Genres</h2>
          <div>{genres}</div>
          <hr />
          <p>Additional information</p>
          <Link to="cast" state={{ from: goBackURL }}>
            Cast
          </Link>
          <Link to="reviews" state={{ from: goBackURL }}>
            Reviews
          </Link>
          <hr />
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;