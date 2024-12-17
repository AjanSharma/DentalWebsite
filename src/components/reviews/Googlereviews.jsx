import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Googlereviews.css'; // Your custom styles

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/google-reviews', {
          params: {
            placeId: 'ChIJg_Iz8XflDDkRCh-hOEWuWLI',
            apiKey: 'AIzaSyCnAJi7ShZNzQrLpE19x8kJuEgaFmQ7ndA',
          },
        });
        setReviews(response.data); // Set reviews from the backend
      } catch (err) {
        console.error(err);
        setError('Failed to fetch reviews.');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>{error}</p>;

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Optional, hides navigation arrows
  };

  return (
    <div className="review-slider" id='testimonials1'>
      <h2>Google Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h4>{review.author_name}</h4>
            <p>{review.text}</p>
            <p>Rating: {review.rating} ⭐</p>
            <p>{review.relative_time_description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;



// import axios from 'axios';
// import { useState, useEffect } from 'react';

// const Reviews = () => {
//     const [reviews, setReviews] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchReviews = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/google-reviews', {
//                     params: {
//                         placeId: 'ChIJg_Iz8XflDDkRCh-hOEWuWLI',
//                         apiKey: 'AIzaSyCnAJi7ShZNzQrLpE19x8kJuEgaFmQ7ndA',
//                     },
//                 });
//                 setReviews(response.data); // Set reviews from the backend
//             } catch (err) {
//                 console.error(err);
//                 setError('Failed to fetch reviews.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchReviews();
//     }, []);

//     if (loading) return <p>Loading reviews...</p>;
//     if (error) return <p>{error}</p>;

//     return (
//         <div>
//             <h2>Google Reviews</h2>
//             <ul>
//                 {reviews.map((review, index) => (
//                     <li key={index}>
//                         <h4>{review.author_name}</h4>
//                         <p>{review.text}</p>
//                         <p>Rating: {review.rating} ⭐</p>
//                         <p>{review.relative_time_description}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Reviews;


