import React, { Component } from "react";
import { getQuestions } from "./question.service";

class Questions extends Component {
  state = {};
  componentWillMount() {
    getQuestions
      .then(res => res.json())
      .then(payload => this.setState({ questions: payload }));
  }
  render() {
    if (!this.state.questions) {
      return <div>Loading.....</div>;
    }
    return (
      <div>
        <ul>{this.state.questions.map(q => <li>q.question</li>)}</ul>
      </div>
    );
  }
}

export default Questions;
