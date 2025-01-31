import React from "react";
import MenuItem from "./MenuItem";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(e) {
    const currentState = this.state.showMenu;
    this.setState({ showMenu: !currentState });
  }

  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="navbar-item title is-unselectable my-name">
              
            </a>
            <span
              className="navbar-burger burger"
              onClick={this.handleMenuClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div
            className={
              "navbar-menu nav-menu " +
              (this.state.showMenu ? "is-active" : null)
            }
          >
            <div className="navbar-end" onClick={this.handleMenuClick}>
              <MenuItem text="About Me" href="#aboutMe" />
              <MenuItem text="Experience" href="#experience" />
              <MenuItem text="Skills" href="#skills" />
              <MenuItem text="Projects" href="#projects" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
