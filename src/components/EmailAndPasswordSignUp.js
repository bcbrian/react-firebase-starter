import React, { useState } from "react";
import { emailAndPasswordSignUp } from "../firebase/auth";

const EmailAndPasswordSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h3>Sign up then in</h3>
      <input value={email} onChange={event => setEmail(event.target.value)} />
      <input
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button onClick={() => emailAndPasswordSignUp(email, password)}>
        Sign Up then in
      </button>
    </>
  );
};

export default EmailAndPasswordSignUp;
