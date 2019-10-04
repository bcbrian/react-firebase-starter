/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import {
  signInViaGitHubPopUp,
  signInViaGitHubRedirect
} from "../firebase/auth";

import Button from "./Button";

const SignInViaGitHub = ({ history }) => (
  <div
    css={css`
      width: 240px;
      height: 320px;
    `}
  >
    <h3>sign in via GitHub only</h3>
    <Button onClick={() => signInViaGitHubPopUp()}>
      Sign In via GitHub Pup-up
    </Button>
    <Button onClick={() => signInViaGitHubRedirect()}>
      Sign In via GitHub Redirect
    </Button>
    <Button onClick={() => history.goBack()}>cancel</Button>
  </div>
);

export default SignInViaGitHub;
