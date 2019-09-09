import React, { Component } from "react";
import SeriesList from "../../components/SeriesList";

class Series extends Component {
	constructor(props) {
    super(props);

    this.state = {
      movieList: [],
      searchTerm: "",
      isDataFetch: false
    }

    this.fetchSearcMovieStories = this.fetchSearcMovieStories.bind(this);
  }


  	fetchSearcMovieStories(event){
  		this.setState({ searchTerm: event.target.value, isDataFetch: true });
	    fetch(`http://api.tvmaze.com/search/shows?q=${event.target.value}`)
	    .then(response => response.json())
	    .then(result => this.setState({ movieList: result, isDataFetch: false }))
  	}


	render(){
		const { movieList, searchTerm, isDataFetch } = this.state;
		return(
			<div>
				<div>
					<input 
						type="text" 
						value={searchTerm} 
						onChange={this.fetchSearcMovieStories} 
					/>
				</div>


			{!isDataFetch && movieList.length === 0 && searchTerm.trim() === "" && (
				<p>Please enter the movie list keyword</p>
			)}

			{!isDataFetch && movieList.length === 0 && searchTerm.trim() !== "" && (
				<p>there is no such kind of movie in this list</p>
			)}

			{!isDataFetch && <SeriesList list={movieList} /> }

			
			</div>
		)
	}
}

export default Series;