import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";
import NewQuestion from "./NewQuestion";
import Questions from "./Questions";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Question Bank</h1>
          <nav className="nav-bar">
            <NavLink
              className="nav-content"
              to="/questions"
              activeClassName="active"
            >
              <span className="nav-link">Questions</span>
            </NavLink>
            <NavLink className="nav-content" to="/new" activeClassName="active">
              <span className="nav-link">New Question</span>
            </NavLink>
          </nav>
          <hr />
          {<Route path="/Questions" component={Questions} />}
          <Route path="/new" component={NewQuestion} />
        </div>
      </Router>
    );
  }
}

export default App;
