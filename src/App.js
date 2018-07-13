import React, { Component } from 'react';
import TopNav from './TopNav';

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
    console.log(this.state.navButtonIsClicked, this.addClassName(this.state.navButtonIsClicked))
    return (
      <div>
        <TopNav
          displayNavBar = {this.displayNavBar}
          addClassName = {this.addClassName(this.state.navButtonIsClicked)}
        />
      </div>
    );
  }
}

export default App;
