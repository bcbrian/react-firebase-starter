import React, { useState } from "react";
import { emailAndPasswordSignIn } from "../firebase/auth";

const EmailAndPasswordSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h3>Sign in only</h3>
      <input value={email} onChange={event => setEmail(event.target.value)} />
      <input
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button onClick={() => emailAndPasswordSignIn(email, password)}>
        Sign In only
      </button>
    </>
  );
};

export default EmailAndPasswordSignIn;
