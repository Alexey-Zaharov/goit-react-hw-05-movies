import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieInfo.css';

const MovieInfo = ({ backLink, poster_path, title, overview, genres }) => {
  return (
    <div className="movi-container">
      <Link to={backLink} className="back-link">
        Go back
      </Link>
      <div className="movie-info">
        <img
          src={poster_path && `https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
        <div>
          <h2>{title}</h2>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres &&
              genres.map(({ name }) => {
                return <li key={name}>{name}.</li>;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.array,
  backLink: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default MovieInfo;
