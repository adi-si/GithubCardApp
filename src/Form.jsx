import React, { Component, createRef } from "react";
import axios from "axios";

class GithubForm extends React.Component {
  state = { userName: "" };
  render() {
    const handleSubmit = async (event) => {
      event.preventDefault();
      const resp = await axios.get(
        `https://api.github.com/users/${this.state.userName}`
      );
      this.props.onSubmit(resp.data);
      this.setState({ userName: "" });
      console.log(this.state.userName);
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder="GitHub username"
          required
        ></input>
        <button>Add Card</button>
      </form>
    );
  }
}

export default GithubForm;
