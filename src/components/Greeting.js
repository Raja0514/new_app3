import React from "react";
import UserGreetings from "./UserGreetings";
import GuestGreetings from "./GuestGreetings";
function Greeting(props) {
  const loginuser = props.login;
  if (loginuser) {
    return <UserGreetings></UserGreetings>;
  } else {
    return <GuestGreetings></GuestGreetings>;
  }
}
export default Greeting;
