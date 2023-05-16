import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchData, setSearchData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const saerchValue = searchParams.get('saerchValue') ?? '';

  useEffect(() => {
    if (saerchValue === '') return;

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=631b0300fdf69969f8e6b4e2073a8abc&language=en-US&query=${saerchValue}&page=1&include_adult=false`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(setSearchData)
      .catch(error => window.alert(error));
  }, [saerchValue]);

  const onSubmit = event => {
    event.preventDefault();
    switch (event.currentTarget.elements.search.value.trim()) {
      case '':
        window.alert(`WHOOPS!!! No data to search`);
        break;
      case searchData:
        window.alert(`WHOOPS!!! You are alredy looking on "${searchData}"`);
        break;
      default:
        event.target.value === ''
          ? setSearchParams({})
          : setSearchParams({
              saerchValue: event.currentTarget.elements.search.value,
            });
        event.currentTarget.reset();
    }
  };

  return (
    <div>
      <form onSubmit={event => onSubmit(event)}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />

        <button type="submit">Search</button>
      </form>
      <ul>
        {searchData.results &&
          searchData.results.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Movies;
