import React, { Component } from "react";
import { Link } from "react-router-dom";

import Price from "../Price/Price";
import ic_shipping from "../../assets/img/ic_shipping.png";
import "./ProductListItem.scss";

class ProductListItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <div className="Item">
        <div className="Item__image">
          <img src={item.picture} alt="" />
        </div>
        <dir className="Item__info">
          <div className="Item__price">
            <Price price={item.price} />
            {item.free_shipping && (
              <span className="Item__shipping">
                <img src={ic_shipping} alt="" />
              </span>
            )}
          </div>
          <Link to={`/items/${item.id}`} className="Item__title">
            {item.title}
          </Link>
        </dir>
        <div className="Item__location">Mendoza</div>
      </div>
    );
  }
}

export default ProductListItem;
