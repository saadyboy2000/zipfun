import React from "react";

const Weather = props => (

	<div className="weather__info">
	 {	
	 	props.city && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }</span>
	 	</p> 
	 }
	 
	  {	
	 	props.store && <p className="weather__key"> Store Name: 
	 		<span className="weather__value"> { props.store }</span>
	 	</p> 
	 }

	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default Weather;