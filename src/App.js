import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>TV Series App</p>
        </header>

      <Intro messsage="Here you can find your favourite TV Series App" />       

      </div>
    );
}
}

const Intro = (props) => (
        <div className="App-Intro">
          {props.messsage}
        </div>
  )

export default App;
