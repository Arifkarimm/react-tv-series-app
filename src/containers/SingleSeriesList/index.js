import React,{ Component } from "react";

class SingleSeriesList extends Component {
	constructor(props) {
    super(props);

    this.state = {
      singleMovieItem: null
    }

  }

   componentDidMount(){ 
  		const { id } = this.props.match.params;
	    fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
	    .then(response => response.json())
	    .then(result => this.setState({ singleMovieItem: result }))
  	}

	render(){
		
		const { singleMovieItem } = this.state;
		return(
			<div>
				{singleMovieItem !== null && (
					<div>
						<p>{singleMovieItem.name}</p>
						<p>Premiered - {singleMovieItem.premiered}</p>
						<p>Rating - {singleMovieItem.rating.average}</p>
						<p>Episodes - {singleMovieItem._embedded.episodes.length}</p>
						<p>
							<img src={singleMovieItem.image.medium} alt="singleMovieItem" />
						</p>
					</div>
				)}
			</div>
		)
	}

}

export default SingleSeriesList;