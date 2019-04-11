import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import ProducstList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";

import "bootstrap/dist/css/bootstrap-grid.css";
import "./App.scss";

import Header from "./components/Header/Header";

class App extends Component {
  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <BrowserRouter>
        <Helmet>
          <title>Mercado Libre Argentina</title>
          <meta
            name="description"
            content="La comunidad de compra y venta online más grande de América Latina."
          />
        </Helmet>
        <Header className="App-header" />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/items"
              component={ProducstList}
            />
            <Route exact path="/items/:itemId" component={ProductDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
