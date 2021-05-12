import React from "react";
import { Container } from "react-bootstrap";
import Signup from "./Signup";
import { AuthProvider } from "../AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./Login";
import Dashboard from "./Dashboard";
import "./App.css";
import bg from "./bg.jpg";
function App() {
  return (
    <>
      <div className="bg">
        <img src={bg} alt="" />
      </div>
      <AuthProvider>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Router>
              <Switch>
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/" component={LogIn} />
                <Route exact path="/dashboard" component={Dashboard} />
              </Switch>
            </Router>
          </div>
        </Container>
      </AuthProvider>
    </>
  );
}

export default App;
