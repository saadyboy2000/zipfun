import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
//import Name from "./components/Name";


class App extends React.Component {
  state = {
    city: undefined,
    //stores:[],//start here store[index].name
    store: undefined,
    //store2: undefined,
    //names: [],
    //launch_date: undefined,store[index].launch_date
    launch: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const zipcode = e.target.elements.zipcode.value;
    const api_call = await fetch(`https://shipt-zip-code-test-api.herokuapp.com/api/zip_codes/${zipcode}`);
    const data = await api_call.json();
    //const names = data.stores.map(p=>p.name);
    if (zipcode) {
      this.setState({
        city: data.metro_name,
        store:data.stores[0].name,
        //store2:data.stores[1].name,
        launch: data.stores[0].launch_date,
        //names: names,
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        store: undefined,
        //store2: undefined,
        launch: undefined,
       //names: [],
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
                    launch = {this.state.launch_date}
                    error={this.state.error}
                  />
                {/* <Name names= {this.state.names}/> */}
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