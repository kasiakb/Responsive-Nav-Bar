import React, { Component } from 'react';
import './TopNav.css';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upList: '',
    };
  }

  change(isClicked) {
    if(isClicked.clicked) {
      this.setState({ upList: 'nav_list--display'})
    } else {
      setTimeout(() => {
        this.setState({ upList: '' })
      }, 1000);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.change(nextProps)
  }

  render() {

    return (
      <div className="nav">
        <a className="nav_button" href="#nav" tabIndex="1"  onClick={(e)=>this.props.displayNavBar(e)}>
          <span className="nav--text ">Navigation</span>
          <span className={this.props.addClassName('nav-triangleDown', 'nav-triangleUp')}></span>
        </a>
        <ol className ={ `nav_list ${this.state.upList}`}>
          <li className="nav_item">
            <a href="#" tabIndex="1" className="nav_link nav--underline">
              Team
            </a>
          </li>
          <li className="nav_item">
            <a href="#" tabIndex="1" className="nav_link nav--underline">
              What We Do
            </a>
          </li>
          <li className="nav_item">
            <a href="#" tabIndex="1" className="nav_link nav--underline">
              Work
            </a>
          </li>
          <li className="nav_item">
            <a href="#" tabIndex="1" className="nav_link nav--underline">
              Foundry
            </a>
          </li>
          <li className="nav_item">
            <a href="#" tabIndex="1" className="nav_link nav--underline">
              Labs
            </a>
          </li>
          <li className="nav_item">
            <a href="#" tabIndex="1" className="nav_link nav--box">
              Contact
            </a>
          </li>
        </ol>
      </div>
    );
  }
}

export default TopNav;