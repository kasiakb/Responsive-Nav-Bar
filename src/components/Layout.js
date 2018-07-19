import React, { Component } from 'react';
// import './Layout.css';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropClassName: ''
    };
  }

  change(isClicked) {
    setTimeout(() => {
      this.setState({ dropClassName: this.props.addClassName(this.props.clicked)('layout-down', '') })
    }, 500);
  }

  componentWillReceiveProps(nextProps) {
    this.change(nextProps)
  }

  render() {
    return (
      <div className={ `layout ${this.state.dropClassName}`}>
        <div className="layout__intro">
          <h2 className="intro__title-first">
            Try how works
          </h2>
          <h1 className="intro__title-second">
            Responsive Topnav
          </h1>
          <p className="intro__description">
            Mobile first responsive topnav example with simple animations created using CSS and REACT. Resize the browser window to see how it works!
          </p>
        </div>
      </div>
    );
  }
}

export default Layout;