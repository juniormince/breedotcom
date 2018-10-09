//wake up wake up wake up
import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

//now with style
import '../../styles/main.css';
// import Header from '../Header/Header';
// import Home from '../Home/Home';


class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  showSettings(event) {
    event.preventDefault();
  }

  isMenuOpen = (state) => {
    return state.isOpen;
  };


  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  // this can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false })
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    return (
      <div id="outer-container">
        <Menu scaleDown pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <a className="menu-item" id="home" href="/">Home</a>
        <a className="menu-item" id="about" href="/about">About</a>
        <a className="menu-item" id="contact" href="/contact">Contact</a>
        </Menu>
        FIXED HEADER TEST (seems to work if not a component)
        <main id="page-wrap">
          .
          .
          .
        </main>
      </div>
    );
  }
}
export default (Nav);