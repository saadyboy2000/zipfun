import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="number" name="zipcode" placeholder="Enter zipcode..."/>
		<button>Get Stores!</button>
	</form>
);

export default Form;