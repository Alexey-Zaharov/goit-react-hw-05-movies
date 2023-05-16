import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Cast = () => {
  const [credits, setCredits] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=631b0300fdf69969f8e6b4e2073a8abc&language=en-US`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(setCredits)
      .catch(error => window.alert(error));
  }, [movieId]);
  return (
    <div>
      <h3>Casts</h3>
      <ul>
        {credits.cast &&
          credits.cast.map(({ profile_path, name, id }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path &&
                    `https://image.tmdb.org/t/p/w300${profile_path}`
                  }
                  alt={name}
                />
                <p> {name}.</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Cast;
