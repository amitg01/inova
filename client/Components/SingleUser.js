import React, { Component } from "react";
import { Link } from "react-router-dom";
import BuyForm from "./BuyForm";

class SingleUser extends Component {
  state = {
    record: null
  };

  id = this.props.match.params.id;

  deleteUser = () => {
    fetch(`http://localhost:3000/users/${this.id}/remove`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data =>
        data.success
          ? this.props.history.push("/")
          : console.log("something went wrong")
      );
  };

  buyFormSubmit = (product, amount) => {
    const body = { product, amount };
    fetch(`http://localhost:3000/users/${this.id}/purchase`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data =>
        data.success
          ? this.setState({ ...this.state, record: data.user })
          : console.log("something went wrong")
      );
  };

  buyFormSubmit = (product, amount) => {
    const body = { product, amount };
    fetch(`http://localhost:3000/users/${this.id}/purchase`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data =>
        data.success
          ? this.setState({ ...this.state, record: data.user })
          : console.log("something went wrong")
      );
  };

  componentDidMount() {
    fetch(`http://localhost:3000/users/${this.id}`)
      .then(res => res.json())
      .then(data => this.setState({ ...this.state, record: data.user }));
  }

  render() {
    const { record } = this.state;
    return (
      <div className="singleUser">
        <p className="Su__userName">{record && record.name}</p>
        <p className="Su__total">{record && record.total}</p>
        <button onClick={this.deleteUser}>Delete User</button>
        <BuyForm buyFormSubmit={this.buyFormSubmit} />
        <button className="Su__btn">
          <Link
            to={{
              pathname: "/payment",
              id: this.id
            }}
          >
            Pay
          </Link>
        </button>
        {this.state.record &&
          this.state.record.products.reverse().map((history, index) => {
            return (
              <div className="Su__record__card" key={index}>
                <p className="Su__product">{history.product}</p>
                <p className="Su__amt">{history.amount}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default SingleUser;
