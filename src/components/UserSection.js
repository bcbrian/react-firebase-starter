import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext, AUTHENTICATING } from "../firebase/auth";

import SignOut from "./SignOut";

const UserSection = () => {
  const user = useContext(UserContext);
  if (user === AUTHENTICATING) {
    return null;
  }
  return (
    <>
      <Link to="/dashboard">dashboard</Link>
      <h1>Hello, {user ? user.email : "you"}</h1>
      {user ? (
        <SignOut />
      ) : (
        <ul>
          <li>
            {" "}
            <Link to="/sign-in/github">sign in via github</Link>
          </li>
          <li>
            {" "}
            <Link to="/sign-in/passwordless">sign in passwordless</Link>
          </li>
          <li>
            {" "}
            <Link to="/sign-up">sign up</Link>
          </li>
          <li>
            {" "}
            <Link to="/sign-in">sign in</Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default UserSection;
