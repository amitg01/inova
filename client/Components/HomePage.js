import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data =>
        this.setState({
          ...this.state,
          users: data
        })
      );
  }
  render() {
    return (
      <div className="wrapper">
        <div className="createUser">
          <Link to="/createUser">Create User</Link>
        </div>
        {this.state.users.users &&
          this.state.users.users.map((user, index) => {
            return (
              <div className="card" key={index}>
                <Link to={{ pathname: `/singleUser/${user._id}` }}>
                  <div>{user.name}</div>
                  <div>{user.total}</div>
                </Link>
              </div>
            );
          })}
      </div>
    );
  }
}
export default HomePage;
