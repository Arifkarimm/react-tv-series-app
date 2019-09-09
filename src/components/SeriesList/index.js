import React from "react";
import "./index.css";



const SeriesListItem = ({movieItem}) => {
	return (
		<li>
			{movieItem.show.name}
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
