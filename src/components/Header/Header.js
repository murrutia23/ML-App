import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./Header.scss";
import logo from "../../assets/img/Logo_ML.png";
import icSearch from "../../assets/img/ic_Search.png";

class Header extends React.Component {
  state = {
    search: ""
  };

  handleClick = e => {
    e.preventDefault();
    this.props.history.push(`/items?search=${this.state.search}`);
  };

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  render() {
    return (
      <header className="Header">
        <div className="container">
          <div className="row">
            <Link to="/">
              <img
                className="Header__logo"
                src={logo}
                alt="MercadoLibre Logo"
              />
            </Link>
            <form onSubmit={this.handleClick}>
              <input
                name="search"
                onChange={this.handleChange}
                className="Header__input-search"
                type="text"
                placeholder="Nunca dejes de buscar"
                value={this.state.search}
                autoComplete="off"
              />
              <button className="Header__button-search">
                <img src={icSearch} alt="" />
              </button>
            </form>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
