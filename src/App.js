import React from "react";
import "./App.css";
import "bulma/css/bulma.css";
import NavBar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./button/Button";
import Signup from "./signup/Signup";
import Container from "./container/Container";
import Message from "./message/Message";

const App = () => {
  return (
    <>
      <Container>
        <Signup />
      </Container>
      <Container>
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>.
        </Message>
      </Container>
    </>
    /* <NavBar />;
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton> */
  );
};

export default App;
