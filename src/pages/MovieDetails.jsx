import {
  Outlet,
  Link,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import React from 'react';
import MovieInfo from '../components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=631b0300fdf69969f8e6b4e2073a8abc&language=en-US`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        if (!response.ok) {
          navigate('/movies', { replace: true });
        }
      })
      .then(setMovie)
      .catch(error => window.alert(error));
  }, [movieId, navigate]);
  return (
    <div>
      {/* {movieId && <Navigate to="/movies" />} */}
      {movie && (
        <MovieInfo
          poster_path={movie.poster_path}
          title={movie.title}
          overview={movie.overview}
          genres={movie.genres}
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
