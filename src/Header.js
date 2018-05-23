import React from 'react';
import { Menu } from './Resources/Icons.js';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return !props.visible ? <div></div> : (
    <div className="header-modal">
      <span onClick={props.backClick}>
        <Menu className="icon" />
      </span>
      <h1>Menu</h1>
      {props.links.map((link, i) =>
        <Link key={i} to={link.nav} onClick={props.backClick}>
          <h3>{link.display}</h3>
        </Link>
      )}
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
          <div className="header-content">
            <div className="header-grid">
              <span onClick={() => this.toggleMenuVisibility()}>
                <Menu className="icon" />
              </span>
              <div>McClain Cookbook</div>
            </div>
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
