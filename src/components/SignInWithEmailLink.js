import React, { useState } from "react";
import { signInWithEmailLink } from "../firebase/auth";
const SignInWithEmailLink = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <h3>email login only</h3>
      <input value={email} onChange={event => setEmail(event.target.value)} />
      <button onClick={() => signInWithEmailLink(email)}>
        Sign In via Email only
      </button>
    </>
  );
};

export default SignInWithEmailLink;
