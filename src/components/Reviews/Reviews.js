import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'services/moviesApi';

const Reviews = () => {
  const { itemId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const reviews = await getMovieReviews(itemId);
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [itemId]);

  return (
    <div>
      {reviews && (
        <ul>
          {reviews.results.length > 0 ? (
            reviews.results.map(({ author, content }) => (
              <li key={author}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            ))
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default Reviews;