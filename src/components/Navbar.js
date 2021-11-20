import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="nav">
          <div>
            <Link to="/inventory">
              <h2 style={{ margin: 0 }}>Projects</h2>
            </Link>
          </div>
          <nav className="list">
            <ul className="nav_links" style={{ margin: 0 }}>
              <Link to="/colorflip">
                <li>Color Flip</li>
              </Link>
              <Link to="/counter">
                <li>Counter</li>
              </Link>
              <Link to="/review">
                <li>Review</li>
              </Link>

              <Link to="/add" style={{}}>
                <li>Todo app </li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
