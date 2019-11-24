import React from "react";

class locations extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      states: "",
      zip: "",
      phone: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <h2>Add a store location</h2>
        <form>
          <label for="name">Store Name: </label>
          <input
            type="text"
            value={this.state.name}
            name="name"
            placeholder="Store Name"
            onChange={this.handleChange}
          />
          <br />
          <label for="address">Address: </label>
          <input
            type="text"
            value={this.state.address}
            name="address"
            placeholder="Store Address"
            onChange={this.handleChange}
          />
          <br />
          <label for="city">City: </label>
          <input
            type="text"
            value={this.state.city}
            name="city"
            placeholder="City"
            onChange={this.handleChange}
          />
          <br />
          <label for="states">State: </label>
          <select
            value={this.state.states}
            name="states"
            onChange={this.handleChange}
          >
            <option value="MO">MO-Missouri</option>
            <option value="IL">IL-Illinois</option>
            <option value="NY">NY-New York</option>
          </select>
          <br />
          <label for="zips">Zip Code: </label>
          <input
            type="text"
            value={this.state.zips}
            name="zips"
            placeholder="Zip Code"
            onChange={this.handleChange}
          />
          <br />
          <label for="phone">Phone: </label>
          <input
            type="text"
            value={this.state.phone}
            name="phone"
            placeholder="Phone"
            onChange={this.handleChange}
          />
          <br></br>
          <button>Save</button>
          <p>{this.state.name}</p>
          <p>{this.state.address}</p>
          <p>{this.state.city}</p>
          <p>{this.state.states}</p>
          <p>{this.state.zips}</p>
          <p>{this.state.phone}</p>
        </form>{" "}
      </div>
    );
  }
}
export default locations;
