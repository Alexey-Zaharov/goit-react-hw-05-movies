import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=631b0300fdf69969f8e6b4e2073a8abc'
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => setMovies(data.results))
      .catch(error => window.alert(error));
  }, []);
  return (
    <div>
      <h1>Tranding Today</h1>
      <ul>
        {movies.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
