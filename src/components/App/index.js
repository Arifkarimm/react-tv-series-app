import React, { Component } from 'react';
import './App.css';
import Intro from "../Intro";

import Main from "../Main";


class App extends Component {

  render(){
    return (
      <div className="App">

        <header className="App-header">
          <p>TV Series App</p>
        </header>
        <Intro messsage="Here you can find your favourite TV Series App" /> 
        <Main />

      </div>
    );
}
}



export default App;
