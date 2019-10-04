/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useContext } from "react";

const buttonStyles = css`
  background-color: white;
  border: 2px solid rebeccapurple;
  border-radius: 4px;
  padding: 8px 12px;
  text-decoration: none;
  color: rebeccapurple;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  text-align: center;
`;

export default function Button({ component: Component = "button", ...props }) {
  return <Component css={buttonStyles} {...props} />;
}
