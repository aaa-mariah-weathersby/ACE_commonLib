import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/InputField/inputField.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Input
            className={"inputFieldClass"}
            labelClassName={"labelClass"}
            title={"title"}
            placeholder={"placeholder"}
            value={"initial value"}
            maxLength={"100"}
            icon={null}
            errorMessage={"errorMessage"}
            // onChange={(e) => { onInput(e.target.value); }}
            // onFocus={this.onFocus}
            // onBlur={this.onBlur}
            typeAttr={"typeAttr"}
          />
        </p>
      </div>
    );
  }
}

export default App;
