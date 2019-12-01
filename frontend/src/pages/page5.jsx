import React from "react";

class addLocations extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      addStore: {}
    };
  }

  handleSubmit(data) {
    return fetch("http://localhost:8080/employer/" + this.state.addStore.id, {
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
    return (
      <div>
        <h2>Add a store location</h2>
        <form onSubmit={this.handleSubmit}>
          <label for="name">Store Name: </label>
          <input
            type="text"
            value={this.state.addStore.name}
            name="name"
            placeholder="Store Name"
            required
          />
          <br />
          <label for="address">Address: </label>
          <input
            type="text"
            value={this.state.addStore.address}
            name="address"
            placeholder="Store Address"
            required
          />
          <br />
          <label for="city">City: </label>
          <input
            type="text"
            value={this.state.addStore.city}
            name="city"
            placeholder="City"
            required
          />
          <br />
          <label for="states">State: </label>
          <select value={this.state.addStore.states} name="states" required>
            <option value="MO">MO-Missouri</option>
            <option value="IL">IL-Illinois</option>
            <option value="NY">NY-New York</option>
          </select>
          <br />
          <label for="zips">Zip Code: </label>
          <input
            type="text"
            value={this.state.addStore.zips}
            name="zips"
            placeholder="Zip Code"
            required
          />
          <br />
          <label for="phone">Phone: </label>
          <input
            type="text"
            value={this.state.addStore.phone}
            name="phone"
            placeholder="Phone"
            required
          />

          <div class="btn-group btn-group-toggle">
            <button type="button" type="submit" class="btn btn-primary">
              Save
            </button>
          </div>

          <br></br>
        </form>{" "}
      </div>
    );
  }
}
export default addLocations;
