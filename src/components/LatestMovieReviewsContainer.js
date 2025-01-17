import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'IxypEn01A7X3AuPTEwrdeBiybVmGjd1q';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    constructor() {
        super();

        this.state = {
            reviews: [],
        };
    }

    componentDidMount() {
        fetch(URL)
            .then((res) => res.json())
            .then((reviewData) => this.setState({
                reviews: reviewData.results
            }));
    }

    render() {
        return ( 
            <div className="latest-movie-reviews">
                <h2>Latest Movie Reviews</h2>
                < MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer