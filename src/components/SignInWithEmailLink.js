/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import { signInWithEmailLink } from "../firebase/auth";

import Button from "./Button";

const SignInWithEmailLink = ({ history }) => {
  const [email, setEmail] = useState("");
  return (
    <>
      <h3>email login only</h3>
      <input value={email} onChange={event => setEmail(event.target.value)} />
      <Button onClick={() => signInWithEmailLink(email)}>
        Sign In via Email only
      </Button>
      <Button onClick={() => history.goBack()}>cancel</Button>
    </>
  );
};

export default SignInWithEmailLink;
