import React from 'react';

// ReviewCard component
const ReviewCard = ({ initials, name, location, content, rating }) => {
  // Calculate star elements based on rating (for simplicity, we'll use a hardcoded SVG)
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      stars.push(<span key={i}>&#9733;</span>); // full star
    } else {
      stars.push(<span key={i}>&#9734;</span>); // empty star
    }
  }

  return (
    <div className="card-review card-review-variant-home">
      <div className="card-review-wrapper">
        <div className="card-review-header">
          <div className="personal-picture">{initials}</div>
          <div>
            <div className="name">{name}</div>
            <div className="legend">In {location}</div>
          </div>
        </div>
        <div className="card-review-content">{content}</div>
        <div className="card-review-footer home">
          <div className="tp-widget-stars card-review-trustpilot">
            <div>{stars}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ReviewSection component
const Review = () => {
  // Mock data for reviews
  const reviews = [
    {
      initials: 'VE',
      name: 'Veronica',
      location: 'Paris',
      content:
        'Excellent location. Very easy to find in Google maps. Park next to the church to drop luggage...',
      rating: 4.6,
    },
    {
      initials: 'EL',
      name: 'Ellie',
      location: 'London',
      content: 'Easy to book. Easy to hand in luggage. Easy to collect luggage. Very convenient.',
      rating: 4.5,
    },
    {
      initials: 'BS',
      name: 'Bruce',
      location: 'London',
      content:
        'Simple booking process, bag drop and collection efficient and smooth. Location was directly opposite...',
      rating: 4.8,
    },
  ];

  return (
    <div className="home-v2 home-review">
      <div className="container-home">
        <div className="home-review-header">
          <div>
            <h2>Need a Nannybag review?</h2>
            <h3>Thousands of Nannybag luggage storage reviews are available on Trustpilot</h3>
          </div>
          <div className="trustpilot home-review-trustpilot">
            <div className="d-flex align-items-center cursor-pointer">
              <div className="nanny-icon trustpilot-icon black"></div>
              <div className="trustpilot-trustscore">4.6/5 - 7890 reviews</div>
            </div>
          </div>
        </div>
        <div className="home-review-reviews">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              initials={review.initials}
              name={review.name}
              location={review.location}
              content={review.content}
              rating={review.rating}
            />
          ))}
        </div>
        <div className="home-review-footer">
          <button className="nanny-button rework big inline-block">Read more reviews</button>
        </div>
      </div>
    </div>
  );
};

export default Review;
