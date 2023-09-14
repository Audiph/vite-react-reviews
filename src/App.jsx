import { useState } from 'react';
import reviews from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [id, setId] = useState(0);

  // this can be used if we don't want to use filter and map method
  // const { id, image, job, name, text } = reviews[id]

  const nextItem = () => {
    setId((index) => {
      const newIndex = (index + 1) % reviews.length;
      return newIndex;
    });
  };

  const prevItem = () => {
    setId((index) => {
      const newIndex = (index + reviews.length - 1) % reviews.length;
      return newIndex;
    });
  };

  return (
    <main>
      {reviews
        .filter((_, index) => index === id)
        .map((newReview) => {
          const { id, image, job, name, text } = newReview;
          return (
            <article className="review" key={id}>
              <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                  <FaQuoteRight />
                </span>
              </div>
              <h4 className="author">{name}</h4>
              <p className="job">{job}</p>
              <p className="info">{text}</p>
              <div className="btn-container">
                <button className="prev-btn" onClick={prevItem}>
                  <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextItem}>
                  <FaChevronRight />
                </button>
              </div>
              <button
                className="btn btn-hipster"
                onClick={() =>
                  setId(Math.floor(Math.random() * reviews.length))
                }
              >
                surprise me
              </button>
            </article>
          );
        })}
    </main>
  );
};
export default App;
