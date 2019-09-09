import React from "react";
import { Switch, Route } from "react-router-dom";
import Series from "../../containers/Series";
import SingleSeriesList from "../../containers/SingleSeriesList";



const Main = (props) =>(
	<Switch>
		<Route exact path="/" component={Series} />
		<Route exact path="/movieItem/:id" component={SingleSeriesList} />

	</Switch>

	)

export default Main;	


