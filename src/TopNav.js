import React, { Component } from 'react';
import './TopNav.css';

class TopNav extends Component {
  render() {
    return (
      <div className="nav">
        <a className="nav_button" href="#nav" tabindex="1">
          <span className="nav--text ">Navigation</span>
        </a>
        <ol className="nav_list">
          <li className="nav_item">
            <a href="#" tabindex="1" class="nav_link nav--underline">
              Team
            </a>
          </li>
          <li className="nav_item">
            <a href="#" tabindex="1" className="nav_link nav--underline">
              What We Do
            </a>
          </li>
          <li className="nav_item">
            <a href="#" tabindex="1" className="nav_link nav--underline">
              Work
            </a>
          </li>
          <li className="nav_item">
            <a href="#" tabindex="1" className="nav_link nav--underline">
              Foundry
            </a>
          </li>
          <li className="nav_item">
            <a href="#" tabindex="1" className="nav_link nav--underline">
              Labs
            </a>
          </li>
          <li className="nav_item">
            <a href="#" tabindex="1" className="nav_link nav--box">
              Contact
            </a>
          </li>
        </ol>
      </div>  
    );
  }
}

export default TopNav;