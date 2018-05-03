import React from "react";

class Name extends React.Component {
    constructor(props){
      super(props);
      //this.state = {names: props.names};
    }
  
  render() {  
    const names = {props.names};
    return (
    <ul>
                {names.map(function(name,index){
                return <li key={index }>{name}</li>
                    })}
                  </ul>
    )  
  }
}
export default Name;