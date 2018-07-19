import React, { Component } from 'react';
import TopNav from './TopNav';
import Layout from './Layout';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.displayNavBar = this.displayNavBar.bind(this)
    this.addClassName = this.addClassName.bind(this)

    this.state = {
      navButtonIsClicked: false,
    };
  }

  displayNavBar(e) {
    e.preventDefault();
    this.setState({navButtonIsClicked: !this.state.navButtonIsClicked})
  }

  addClassName(navButtonIsClicked) {
    return (newClassName, nullOrCurrent) => navButtonIsClicked ? newClassName : nullOrCurrent
  }

  render() {
   
    return (
      <div className="page-wrapper">
        <TopNav
          displayNavBar = {this.displayNavBar}
          addClassName = {this.addClassName(this.state.navButtonIsClicked)}
          clicked = {this.state.navButtonIsClicked}
        />
        <Layout
          clicked = {this.state.navButtonIsClicked}
          addClassName = {this.addClassName}
        />
      </div>
    );
  }
}

export default App;
