import React,{ Component } from "react";

class SingleSeriesList extends Component {
	render(){
		console.log(this.props);
		return(
			<p>single series list item {this.props.match.params.id}</p>
		)
	}

}

export default SingleSeriesList;