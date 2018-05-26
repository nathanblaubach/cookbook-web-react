import React from 'react';
import { Menu } from './Resources/Icons.js';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return !props.visible ? <div></div> : (
    <div className="sidebar">
      <span onClick={props.backClick}>
        <Menu />
      </span>
      <div className="sidebar-content">
        <h1>Menu</h1>
        {props.links.map((link, i) =>
          <Link key={i} to={link.nav} onClick={props.backClick}>
            <h3>{link.display}</h3>
          </Link>
        )}
      </div>
    </div>
  );
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
      navigationLinks: props.links,
    };
  }

  toggleMenuVisibility() {
    const shouldShow = !this.state.menuVisible;
    this.setState({ menuVisible: shouldShow });
  }

  render() {
    return (
      <div>
        <div className="header">
          <div className="header-grid">
            <span onClick={() => this.toggleMenuVisibility()}>
              <Menu className="icon" />
            </span>
            <span className="title">McClain Cookbook</span>
          </div>
        </div>
        <Navigation
          visible={this.state.menuVisible}
          links={this.state.navigationLinks}
          backClick={() => this.toggleMenuVisibility()}
        />
      </div>
    );
  }
}

export default Header;
