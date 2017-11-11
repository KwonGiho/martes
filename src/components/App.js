import React from 'react';
import Contact from './Contact';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    };
  }
    render(){
        return (
          <div>
          <div>
            <Contact />
            </div>
            <div>
              <button onClick={()=> {this.setState({name: 'Velopert'});}}>Click Me </button>
              <h1>Hello!!! {this.state.name}</h1>
            </div>
          </div>
        );
    }
}
