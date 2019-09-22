import React, { Component } from "react";

class CreateUser extends Component {
  state = {
    name: "",
    number: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const body = {
      name,
      number
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data =>
        data.success
          ? this.props.history.push("/")
          : console.log("failed to create user")
      );
  };
  render() {
    return (
      <form>
        <input
          name="name"
          value={this.state.name}
          placeholder="Enter Name"
          onChange={this.handleChange}
        />
        <input
          name="number"
          value={this.state.number}
          placeholder="Enter Number"
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.handleSubmit}>
          Create User
        </button>
      </form>
    );
  }
}

export default CreateUser;
