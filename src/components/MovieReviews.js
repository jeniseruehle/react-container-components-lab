import React from 'react'

const Review = ({ headline, summary_short, link }) => {
    return (
        <div className="review" key={headline}>
            <header>
                <a className="review-link" href={link.url}>
                    {headline}
                </a>
            </header>
            <p>{summary_short}</p>
        </div>
    )
}

const MovieReviews = ({reviews}) => {
  return ( 
        <div className="review-list">
            {reviews.map(Review)}
        </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
};

export default MovieReviews
