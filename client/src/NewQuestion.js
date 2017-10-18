import React, { Component } from "react";
import { addQuestion } from "./question.service";
import "./newquestion.css";

class NewQuestion extends Component {
  state = {};

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;

    this.setState({
      question: {
        ...this.state.question,
        [name]: target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    addQuestion(this.state.question).then(res => {
      this.props.history.push("/questions");
    });
  };
  render() {
    return (
      <div className="form-content">
        <form className="form-container" onSubmit={this.handleSubmit}>
          <div>
            <h2 className="form-title" />New Question
          </div>
          <div className="form-title">Question:</div>
          <input
            className="form-field"
            name="question"
            type="text"
            onChange={this.handleInputChange}
          />
          <br />
          <div className="form-title">Answer:</div>
          <input
            className="form-field"
            name="answer"
            type="text"
            onChange={this.handleInputChange}
          />
          <br />
          <div className="form-title">Author: </div>
          <input
            className="form-field"
            name="author"
            type="text"
            onChange={this.handleInputChange}
          />
          <div class="submit-container">
            <input className="submit-button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default NewQuestion;
