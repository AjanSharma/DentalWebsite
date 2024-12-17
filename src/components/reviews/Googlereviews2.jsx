import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Googlereviews2.css'; // Your custom styles
import img1 from '../../assests/slideimg1.jpg'
import img2 from '../../assests/slideimg2.jpg'
import img3 from '../../assests/slideimg3.jpg'
import img4 from '../../assests/slideimg4.jpg'
import img5 from '../../assests/slideimg5.jpg'
import img6 from '../../assests/slideimg6.jpg'
import img7 from '../../assests/slideimg7.jpg'
import img8 from '../../assests/slideimg8.jpg'
import img9 from '../../assests/slideimg9.jpg'
import img2dentist from '../../assests/about-dentist-img.jpg'

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img2dentist];

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const getRandomImage = () => {
    return images[Math.floor(Math.random() * images.length)];
  };

  return (
    <div className="review-slider" id="testimonials1">
      <h2>Google Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="image-section">
              <img
                src={getRandomImage()}
                alt={`Review ${index + 1}`}
                className="review-image"
              />
            </div>
            <div className="content-section">
              <h4>{review.author_name}</h4>
              <p>{review.text}</p>
              <p>Rating: {review.rating} ⭐</p>
              <p>{review.relative_time_description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './Googlereviews2.css'; // Your custom styles
// import img1 from '../../assests/slideimg1.jpg'
// import img2 from '../../assests/slideimg2.jpg'
// import img3 from '../../assests/slideimg3.jpg'
// import img4 from '../../assests/slideimg4.jpg'
// import img5 from '../../assests/slideimg5.jpg'
// import img6 from '../../assests/slideimg6.jpg'
// import img7 from '../../assests/slideimg7.jpg'
// import img8 from '../../assests/slideimg8.jpg'
// import img9 from '../../assests/slideimg9.jpg'
// import img2dentist from '../../assests/about-dentist-img.jpg'
// // Add as many images as you need.

// const Reviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Images for random selection
//   const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img2dentist];

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/google-reviews', {
//           params: {
//             placeId: 'ChIJg_Iz8XflDDkRCh-hOEWuWLI',
//             apiKey: 'AIzaSyCnAJi7ShZNzQrLpE19x8kJuEgaFmQ7ndA',
//           },
//         });
//         setReviews(response.data); // Set reviews from the backend
//       } catch (err) {
//         console.error(err);
//         setError('Failed to fetch reviews.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReviews();
//   }, []);

//   if (loading) return <p>Loading reviews...</p>;
//   if (error) return <p>{error}</p>;

//   // Slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   // Function to get a random image
//   const getRandomImage = () => {
//     return images[Math.floor(Math.random() * images.length)];
//   };

//   return (
//     <div className="review-slider" id="testimonials1">
//       <h2>Google Reviews</h2>
//       <Slider {...settings}>
//         {reviews.map((review, index) => (
//           <div key={index} className="review-card">
//             <div className="image-section">
//               <img
//                 src={getRandomImage()} // Dynamically selects a random image
//                 alt={`Review ${index + 1}`}
//                 className="review-image"
//               />
//             </div>
//             <div className="content-section">
//               <h4>{review.author_name}</h4>
//               <p>{review.text}</p>
//               <p>Rating: {review.rating} ⭐</p>
//               <p>{review.relative_time_description}</p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Reviews;
