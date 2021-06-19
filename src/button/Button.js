import React from "react";
import "bulma/css/bulma.css";

function makeClassName(props) {
  let classe = "button ";

  if (props.className) {
    classe += props.className;
  }
  if (props.isSuccess) {
    classe += " is-success";
  }
  if (props.isDanger) {
    classe += " is-danger";
  }
  if (props.isSmall) {
    classe += " is-small";
  }
  return classe;
}

function CoolButton(props) {
  return <button className={makeClassName(props)}>{props.children}</button>;
}
export default CoolButton;
