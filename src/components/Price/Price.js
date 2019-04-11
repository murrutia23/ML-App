import React from "react";
import "./Price.scss";

function Price(props) {
  return (
    <div className="Price">
      <span>{props.price.currency} </span>
      <span>
        {props.price.amount && Math.trunc(props.price.amount)}
        <span class="Price__decimals">
          {props.price.amount && (props.price.amount % 1).toFixed(props.price.decimals).substring(2)}
        </span>
      </span>
    </div>
  );
}

export default Price;
