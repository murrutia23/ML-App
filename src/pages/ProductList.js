import React, { Component } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

import ProductListItem from "../components/ProductItemList/ProductListItem";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

import "./ProductList.scss";

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      categories: [],
      meta: {
        title: null,
        description: null
      }
    };
  }

  componentDidMount() {
    console.log("componentDidMount");

    this.fetchItems(this.props.location.search.split("=")[1]);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.fetchItems(this.props.location.search.split("=")[1]);
    }
  }

  fetchItems = query => {
    axios
      .get(`http://localhost:3001/api/items?q=${query}&limit=4`)
      .then(result => {
        const category =
          result.data.categories[result.data.categories.length - 1].name;
        this.setState({
          items: result.data.items,
          categories: result.data.categories,
          meta: {
            title: `${this.props.match.params.search} - ${category}`,
            description: `Encontrá ${
              this.props.match.params.search
            } - ${category}. Descubrí la mejor forma de comprar online.`
          }
        });
      });
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>{this.state.meta.title}</title>
          <meta name="description" content={this.state.meta.description} />
        </Helmet>

        <Breadcrumb categories={this.state.categories} />
        <ul className="ProductList">
          {this.state.items.map(item => {
            return (
              <li key={item.id}>
                <ProductListItem item={item} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProductsList;
