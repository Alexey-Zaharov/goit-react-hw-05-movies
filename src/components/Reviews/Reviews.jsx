import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    if (movieId === '') return;
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=631b0300fdf69969f8e6b4e2073a8abc&language=en-US&page=1`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(setReviews)
      .catch(error => window.alert(error));
  }, [movieId]);
  return (
    <div>
      {reviews.results?.[0]?.content ? (
        <>
          <h3>Reviews</h3>
          <ul>
            {reviews.results.map(({ id, author, content }) => {
              return (
                <li key={id}>
                  <p>{author}.</p>
                  <article>{content}</article>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>There are no reviews for this movie.</p>
      )}
    </div>
  );
};
export default Reviews;
