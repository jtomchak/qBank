import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import NewQuestion from "./NewQuestion";
import Questions from "./Questions";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Question Bank</h1>
          <nav>
            <NavLink exact to="/" activeClassName="active">
              Dashboard
            </NavLink>
            <NavLink to="/questions" activeClassName="active">
              Questions
            </NavLink>
            <NavLink to="/new" activeClassName="active">
              New Question
            </NavLink>
          </nav>
          <hr />
          {/* {<Route exact path="/Questions" component={Questions} />} */}
          <Route path="/new" component={NewQuestion} />
        </div>
      </Router>
    );
  }
}

export default App;
