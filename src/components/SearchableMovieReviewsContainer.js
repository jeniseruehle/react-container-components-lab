import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'IxypEn01A7X3AuPTEwrdeBiybVmGjd1q';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: [],
            searchTerm: "",
        }
    }

    handleChange = event => this.setState({
        searchTerm: event.target.value
    })

    handleSubmit = event => {
        event.preventDefault();

        fetch(URL.concat(this.state.searchTerm))
        .then((res) => res.json())
        .then((reviewData) => this.setState({
            reviews: reviewData.results
        }))
    }

    render() {
        return ( 
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input"><b>Search Movie Reviews</b> </label><br></br>
                    <input id ="search-input" type="text"
                        onChange={this.handleChange} />
                    <button type="submit">Submit</button>    
                </form>
                { typeof this.state.reviews === 'object' && 
                    this.state.reviews.length > 0 && 
                    <h2>Movie Reviews</h2> }
                < MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer