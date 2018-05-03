import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";



class App extends React.Component {
  state = {
    city: undefined,
    store: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const zipcode = e.target.elements.zipcode.value;
    const api_call = await fetch(`https://shipt-zip-code-test-api.herokuapp.com/api/zip_codes/${zipcode}`);
    const data = await api_call.json();

    if (zipcode) {
      this.setState({
        city: data.metro_name,
        store:data.stores[0].name,
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        store: undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {  
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    city={this.state.city}
                    store ={this.state.store}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;