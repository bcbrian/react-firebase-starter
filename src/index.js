import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  AUTHENTICATING,
  UserContext,
  handleSignInWithEmailLink,
  onAuthStateChanged
} from "./firebase/auth";

import DashBoard from "./routes/DashBoard";

import PrivateRoute from "./components/PrivateRoute";
import SignInWithEmailLink from "./components/SignInWithEmailLink";
import UserSection from "./components/UserSection";
import SignInViaGitHub from "./components/SignInViaGitHub";
import EmailAndPasswordSignUp from "./components/EmailAndPasswordSignUp";
import EmailAndPasswordSignIn from "./components/EmailAndPasswordSignIn";
import "./styles.css";

function App() {
  const [user, setUser] = useState(AUTHENTICATING);
  handleSignInWithEmailLink();
  useEffect(() => {
    onAuthStateChanged(user => (user ? setUser(user) : setUser(null)));
  }, []);
  return (
    <UserContext.Provider value={user}>
      <Router>
        <UserSection />

        <Route path="/sign-in/github" exact component={SignInViaGitHub} />
        <Route
          path="/sign-in/passwordless"
          exact
          component={SignInWithEmailLink}
        />
        <Route path="/sign-up" exact component={EmailAndPasswordSignUp} />
        <Route path="/sign-in" exact component={EmailAndPasswordSignIn} />
        <PrivateRoute path="/dashboard" component={DashBoard} />
      </Router>
    </UserContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
