import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  state = {
    open: false,
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <nav className="navbar-light bg-light mb-2">
        <Link className="title" to="/">
          Google Books Search
        </Link>
        <Link
          onClick={this.toggleNav}
    
          className={window.location.pathname === "/saved" ? "active subMenu" : "not-active subMenu" }
          to="/saved"
        >
                Saved
        </Link>
      </nav>
    );
  }
}

export default Nav;
