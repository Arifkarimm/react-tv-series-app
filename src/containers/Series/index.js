import React, { Component } from "react";
import SeriesList from "../../components/SeriesList";

class Series extends Component {
	constructor(props) {
    super(props);

    this.state = {
      movieList: [],
      searchTerm: "",
    }

    this.fetchSearcMovieStories = this.fetchSearcMovieStories.bind(this);
  }


  	fetchSearcMovieStories(e){
	    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
	    .then(response => response.json())
	    .then(result => this.setState({ movieList: result}))
  	}


	render(){
		return(
			<div>
			

			<input type="text" onChange={this.fetchSearcMovieStories} />

			<SeriesList list={this.state.movieList} />
			</div>
			
		)
	}
}

export default Series;