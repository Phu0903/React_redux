import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import News from './News';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.num
  }
}


class App extends Component {
  render() {
    return (
      <div>
         <header >
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {this.props.dulieu}
      <News></News>
      </div>
    );
  }
}




export default connect(mapStateToProps)(App);
