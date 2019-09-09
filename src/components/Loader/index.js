import React from "react";
import loader from "../../assets/loader.gif";

const Loader = (props) => {
	return(
		<div>
			<img src={loader} alt="Image-loader" style={{ marginTop: 25 }} />
		</div>	
	)
}

export default Loader;