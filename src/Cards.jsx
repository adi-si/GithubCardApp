import React, { Component } from "react";
import "./GithubCard.css";

class Cards extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div>{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default Cards;
