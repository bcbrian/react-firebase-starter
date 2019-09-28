import React from "react";
import { signInViaGitHub } from "../firebase/auth";

const SignInViaGitHub = () => (
  <>
    <h3>sign in via GitHub only</h3>
    <button onClick={() => signInViaGitHub()}>Sign In via GitHub</button>
  </>
);

export default SignInViaGitHub;
