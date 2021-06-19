import React from "react";
import "bulma/css/bulma.css";

function Container(props) {
  return (
    <div class="container">
      {props.children}
    </div>
  );
}
export default Container;
