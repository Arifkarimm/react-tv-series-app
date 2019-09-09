import React, { Component } from "react";
import SeriesList from "../../components/SeriesList";

class Series extends Component {
	constructor(props) {
    super(props);

    this.state = {
      movieList: []
    }
  }


  	componentDidMount(){
	    fetch(`http://api.tvmaze.com/search/shows?q=girls`)
	    .then(response => response.json())
	    .then(result => this.setState({ movieList: result}))
  	}


	render(){
		return(
			<div>
			The length of movie {this.state.movieList.length}
			<SeriesList list={this.state.movieList} />
			</div>
			
		)
	}
}

export default Series;