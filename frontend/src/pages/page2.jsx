import React from "react";

class Editlocations extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      employer: {}
    };
  }
  componentDidMount() {
    fetch("http://localhost: 3000/employer/" + this.props.match.params.id)
      .then(response => response.jason())
      .then(data => {
        this.setState({ employer: data });
      });
  }

  handleSubmit(data) {
    return fetch("http://localhost:3000/employer" + this.state.staff.id, {
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
      <div className="container">
        <h2>Edit Store Location</h2>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="name">Store Name: </label>
              <input
                type="text"
                class="form-control"
                value={this.state.employer.name}
                name="name"
                placeholder="Store Name"
                required
              />
            </div>

            <div class="form-group">
              <label for="address">Address: </label>
              <input
                type="text"
                class="form-control"
                value={this.state.employer.address}
                name="address"
                placeholder="Store Address"
                required
              />
            </div>

            <div class="form-group">
              <label for="city">City: </label>
              <input
                type="text"
                class="form-control"
                value={this.state.employer.city}
                name="city"
                placeholder="City"
                required
              />
            </div>

            <div class="form-group">
              <label for="states">State: </label>
              <select
                class="form-control"
                value={this.state.employer.states}
                name="states"
              >
                <option value="MO">MO-Missouri</option>
                <option value="IL">IL-Illinois</option>
                <option value="NY">NY-New York</option>
              </select>
            </div>

            <div class="form-group">
              <label for="zips">Zip Code: </label>
              <input
                type="text"
                class="form-control"
                value={this.state.employer.zips}
                name="zips"
                placeholder="Zip Code"
                required
              />
            </div>

            <div class="form-group">
              <label for="phone">Phone: </label>
              <input
                type="text"
                class="form-control"
                value={this.state.employer.phone}
                name="phone"
                placeholder="Phone"
                required
              />
            </div>
            <div class="btn-group btn-group-toggle">
              <button type="button" type="submit" class="btn btn-primary">
                Save
              </button>
              &nbsp;
              <button type="button" class="btn btn-secondary">
                Cancel
              </button>
              &nbsp;
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Editlocations;
