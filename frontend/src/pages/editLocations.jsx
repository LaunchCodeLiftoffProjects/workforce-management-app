import React from "react";
import axios from "axios";
import UserProfile from "./editLocations";

class Editlocations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phone: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:8080/employer/post", this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("http://localhost:8080/employer/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          employer: data
        });
      });
  }

  handleSubmit(data) {
    return fetch("http://localhost:8080/employer/" + this.state.employer.id, {
      method: "PUT",
      mode: "CORS",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res;
      })
      .catch(err => err);
  }

  render() {
    const { name, address, city, state, zip, phone } = this.state;
    return (
      <div>
        <h2>Edit Store Location {this.state.data}</h2>
        <div>
          <form onSubmit={this.submitHandler}>
            <div>
              <label>Store Name: </label>
              <input
                type="text"
                value={name}
                name="name"
                placeholder="Store Name"
                onChange={this.changeHandler}
                required
              />
            </div>

            <div>
              <label>Address: </label>
              <input
                type="text"
                value={address}
                name="address"
                placeholder="Store Address"
                onChange={this.changeHandler}
                required
              />
            </div>

            <div>
              <label>City: </label>
              <input
                type="text"
                value={city}
                name="city"
                placeholder="City"
                onChange={this.changeHandler}
                required
              />
            </div>

            <div>
              <label>State: </label>
              <select value={state} onChange={this.changeHandler} name="state">
                <option value="MO">MO-Missouri</option>
                <option value="IL">IL-Illinois</option>
                <option value="NY">NY-New York</option>
              </select>
            </div>

            <div>
              <label>Zip Code: </label>
              <input
                type="text"
                value={zip}
                name="zip"
                placeholder="Zip Code"
                onChange={this.changeHandler}
                required
              />
            </div>

            <div>
              <label>Phone: </label>
              <input
                type="text"
                value={phone}
                name="phone"
                placeholder="Phone"
                onChange={this.changeHandler}
                required
              />
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Editlocations;
