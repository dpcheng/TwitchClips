import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClipMain from "./containers/ClipMain"

class App extends Component {
    render() {
        return (
            <div className="App">
                  <ClipMain />
            </div>
        )
	}
}

export default App;
