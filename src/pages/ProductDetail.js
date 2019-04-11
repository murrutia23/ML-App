import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

import Price from "../components/Price/Price";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  state = {
    item: {
      price: {}
    },
    categories: []
  };

  componentDidMount() {
    this.fetchItem(this.props.match.params.itemId);
  }

  fetchItem = itemId => {
    axios.get(`http://localhost:3001/api/items/${itemId}`).then(result => {
      console.log(result.data.categories);

      this.setState({
        item: result.data.item,
        categories: result.data.categories
      });
    });
  };

  // Banco Soporte Para Motor Para Armado Y Enchavetado - $ 2.849,05 en Mercado Libre
  render() {
    const item = this.state.item;
    return (
      <div>
        <Helmet>
          <title>{`${item.title} - $${
            item.price.amount
          } en Mercado Libre`}</title>
          <meta
            name="description"
            content={`Compralo en Mercado Libre a $${item.price.amount}.`}
          />
        </Helmet>

        <Breadcrumb categories={this.state.categories} />
        <div className="ProductDetail">
          <div className="ProductDetail__image">
            <img src={item.picture} alt="" />
          </div>
          <div className="ProductDetail__info">
            <div className="ProductDetail__condition">
              {item.condition === "new" ? "Nuevo" : "Usado"}
            </div>
            &nbsp;-&nbsp;
            <div className="ProductDetail__sold-quantity">
              {item.sold_quantity} vendidos
            </div>
            <div className="ProductDetail__title">{item.title}</div>
            <div className="ProductDetail__price">
              <Price price={item.price} />
            </div>
            <button className="ProductDetail__button ProductDetail__button--blue">
              Comprar
            </button>
          </div>
          <div className="ProductDetail__description">
            <span className="title">Descripción del producto</span>
            {item.description &&
              item.description.split("\n").map(i => {
                return <p>{i}</p>;
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
