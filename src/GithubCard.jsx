import React, { Component } from "react";
import "./GithubCard.css";
import CardList from "./CardList";
import Form from "./Form";

const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  },
];

class GithubCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
    };
  }
  render() {
    const addNewProfile = (profileData) => {
      this.setState((prevState) => ({
        profiles: [...prevState.profiles, profileData],
      }));
    };
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={addNewProfile}></Form>
        <CardList profiles={this.state.profiles}></CardList>
      </div>
    );
  }
}

export default GithubCard;
