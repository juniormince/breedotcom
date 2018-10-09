//wake up wake up wake up
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import '../../styles/main.css';

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

  // close the menu
  closeMenu() {
    this.setState({ menuOpen: false })
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }


  render() {
    return (
      <div>
        <aside>
          <Menu
            overlayClassName={"sidenav"}
            width={125}
            onStateChange={this.isMenuOpen}
            customBurgerIcon={<img src="https://i.imgur.com/PAvUyjf.png" alt="nav icon"/>}
          >
                    <img src="https://i.imgur.com/DCyNeo6.gif" width="200px" alt="vault boy thumbs up"/>
          wassup. bird up.
          <br/>
            <Link id="contact" className="menu-item" to="/">Home</Link>
            <Link id="contact" className="menu-item" to={`/`}>About</Link>
            <Link id="about" className="menu-item" to="/">Contact</Link>
          
          </Menu>
        </aside>
      </div>
    );
  }
}
export default connect()(Nav);