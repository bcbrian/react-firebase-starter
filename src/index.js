import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  AUTHENTICATING,
  UserContext,
  handleSignInWithEmailLink,
  onAuthStateChanged
} from "./firebase/auth";

import Index from "./routes/Index";
import DashBoard from "./routes/DashBoard";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import "./style.css";

function App() {
  const [user, setUser] = useState(AUTHENTICATING);
  handleSignInWithEmailLink();
  useEffect(() => {
    onAuthStateChanged(user => {
      console.log("what?");
      return user ? setUser(user) : setUser(null);
    });
  }, []);
  if (user === AUTHENTICATING) {
    return <div />;
  }
  return (
    <UserContext.Provider value={user}>
      <Router>
        <PublicRoute path="/" component={Index} />
        <PrivateRoute path="/dashboard" component={DashBoard} />
      </Router>
    </UserContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
