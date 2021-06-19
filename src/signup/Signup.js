import React from "react";
import "bulma/css/bulma.css";
import FormField from "../formfield/FormField";
import NavBar from "../navbar/Navbar";
import CoolButton from "../button/Button";

export default function Signup() {
  return (
    <>
      <NavBar />
      <form>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="lo@lo.truc" />
        <FormField label="Password" type="password" placeholder="" />
        <CoolButton isSmall isDanger className="is-rounded my-class">
          Signup
        </CoolButton>
      </form>
    </>
  );
}
