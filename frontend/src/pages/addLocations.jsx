import React from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

class addLocations extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      id: "",
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phone: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const body = {
      id: this.state.id,
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      phone: this.state.phone
    };
    axios
      .post("http://localhost:8080/employer", body)
      .then(function(response) {
        console.log(response);
      })
      .then(response => {
        window.location.href = "/listEmployer";
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>Add a store location</h2>
        <div>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="name"
              label="Store Name"
              helperText="Store Name"
              onChange={this.handleChange}
              margin="normal"
              name="name"
              variant="outlined"
              value={this.state.name ? this.state.name : ""}
              required
            />

            <TextField
              id="address"
              label="Address"
              helperText="Address"
              onChange={this.handleChange}
              margin="normal"
              name="address"
              variant="outlined"
              value={this.state.address ? this.state.address : ""}
              required
            />

            <TextField
              id="city"
              label="City"
              helperText="City"
              onChange={this.handleChange}
              margin="normal"
              name="city"
              variant="outlined"
              value={this.state.city ? this.state.city : ""}
              required
            />

            <TextField
              id="state"
              label="State"
              helperText="State"
              onChange={this.handleChange}
              margin="normal"
              name="state"
              variant="outlined"
              value={this.state.state ? this.state.state : ""}
              required
            />

            <TextField
              id="zip"
              label="Zip Code"
              helperText="Zip Code"
              onChange={this.handleChange}
              margin="normal"
              name="zip"
              variant="outlined"
              value={this.state.zip ? this.state.zip : ""}
              required
            />

            <TextField
              id="phone"
              label="Phone"
              helperText="Phone"
              onChange={this.handleChange}
              margin="normal"
              name="phone"
              variant="outlined"
              value={this.state.phone ? this.state.phone : ""}
              required
            />
            <br></br>
            <br></br>
            <br></br>
            <div className="btn-group btn-group-toggle">
              <button type="button" type="submit" className="btn btn-primary">
                Save
              </button>
            </div>

            <br></br>
          </form>{" "}
        </div>
      </div>
    );
  }
}
export default addLocations;
