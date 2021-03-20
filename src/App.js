// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
// import React, { useState } from 'react';


class App extends Component {

  state = {
    username: 'From Aditya',
    userlady: 'From Pooja',
  };


  changeStateHandler = (myName) => {
    console.log('was clicked')

    // this.state.username = "aditya virendra singh";

    this.setState({
      username: myName,
      userlady : 'From Pooja',
    })
  }

  changeUsernameHandler = (event) => {
    
    this.setState({
      username: event.target.value,
      userlady : 'From Pooja',
    })

  }



  render() {


    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <UserInput changed={this.changeUsernameHandler}></UserInput>
        <UserOutput username={this.state.username} userlady={this.state.userlady} click={this.changeStateHandler.bind(this, 'Aditya Virendra singh')}></UserOutput>
        <UserOutput username={this.state.username} userlady={this.state.userlady} ></UserOutput>
        <UserOutput username={this.state.username} userlady={this.state.userlady} ></UserOutput>
        {/* <UserOutput username='From Aditya' userlady =' From Pooja' ></UserOutput> Hard coded value passed to useroutput */}

      </div>
    );

  }


}

export default App;
