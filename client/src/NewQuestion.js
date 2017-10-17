import React, { Component } from "react";
import { addQuestion } from "./question.service";

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
      this.props.history.push("/");
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Question:
          <input
            name="question"
            type="text"
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Answer:
          <input name="answer" type="text" onChange={this.handleInputChange} />
        </label>
        <label>
          Author:
          <input name="author" type="text" onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NewQuestion;
