import React from "react";
import { signOut } from "../firebase/auth";

const SignOut = () => (
  <>
    <h1>sign out</h1>
    <button onClick={() => signOut()}>sign out</button>
  </>
);

export default SignOut;
