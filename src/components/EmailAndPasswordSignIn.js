/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import { emailAndPasswordSignIn } from "../firebase/auth";

import Button from "./Button";

const EmailAndPasswordSignIn = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      css={css`
        width: 240px;
        height: 320px;
      `}
    >
      <h3>Sign in only</h3>
      <input value={email} onChange={event => setEmail(event.target.value)} />
      <input
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <Button onClick={() => emailAndPasswordSignIn(email, password)}>
        Sign In only
      </Button>
      <Button onClick={() => history.goBack()}>cancel</Button>
    </div>
  );
};

export default EmailAndPasswordSignIn;
