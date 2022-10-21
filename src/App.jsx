import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import Layout from './Layout/Layout';
// import Home from './Home/Home';
// import MovieDetails from './MovieDetails/MovieDetails';
import Loader from './components/Loader/Loader';

const Home = lazy(() => import('./components/Home/Home'));
const Layout = lazy(() => import('./components/Layout/Layout'));
const MovieSearch = lazy(() => import('./components/MovieSearch/MovieSearch'));
const MovieDetails = lazy(() =>
  import('./components/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<MovieSearch />} />
          <Route path="movies/:itemId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
