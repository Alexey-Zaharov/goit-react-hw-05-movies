import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import React from 'react';
import MovieInfo from '../components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=631b0300fdf69969f8e6b4e2073a8abc&language=en-US`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(setMovie)
      .catch(error => window.alert(error));
  }, [movieId]);
  const { poster_path, title, overview, genres } = movie;
  return (
    <div>
      {movie && (
        <MovieInfo
          poster_path={poster_path}
          title={title}
          overview={overview}
          genres={genres}
          backLink={backLink.current}
        />
      )}
      <p>Aditional information</p>
      <ul>
        <li>
          <Link to="cast">Casts</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
