import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import Layout from 'components/Layout/Layout';

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/" element={<Home />} />
          <Route path="movies" element={<MovieSearch />} />
          <Route path="movies/:itemId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
