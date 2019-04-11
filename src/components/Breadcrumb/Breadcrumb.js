import React from "react";
import { Link } from "react-router-dom";

import "./Breadcrumb.scss";

function Breadcrumb(props) {
  return (
    <ul className="Breadcrumb">
      {props.categories.map(category => {
        return (
          <li className="Breadcrumb__item" key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Breadcrumb;
