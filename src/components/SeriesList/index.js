import React from "react";
import "./index.css";
import { Link } from "react-router-dom";



const SeriesListItem = ({movieItem}) => {
	return (
		<li>
			<Link to={`/movieItem/${movieItem.show.id}`}>{movieItem.show.name}</Link>
		</li>
	)
}


const SeriesList = props => (
		<div>
			<ul className="App-seriesList">
				{props.list.map(item => (
					 <SeriesListItem key={item.show.id} movieItem={item} />
				))}
			</ul>
		</div>
	)


export default SeriesList;
