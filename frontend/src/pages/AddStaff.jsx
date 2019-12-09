import React, { Component } from "react";
import { Link } from "react-router";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

class AddStaff extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      id: "",
      firstName: "",
      lastName: "",
      staffEmail: "",
      staffPhone: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const body = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      staffEmail: this.state.staffEmail,
      staffPhone: this.state.staffPhone
    };
    axios
      .post("http://localhost:8080/staff", body)
      .then(function(response) {
        console.log(response);
      })
      .then(response => {
        window.location.href = "/ListStaff";
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
        <h3>Add Staff Member:</h3>
        <div>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="firstName"
              label="First Name"
              helperText="First Name"
              onChange={this.handleChange}
              margin="normal"
              name="firstName"
              variant="outlined"
              value={this.state.firstName ? this.state.firstName : ""}
              required
            />

            <TextField
              id="lastName"
              label="Last Name"
              helperText="Last Name"
              onChange={this.handleChange}
              margin="normal"
              name="lastName"
              variant="outlined"
              value={this.state.lastName ? this.state.lastName : ""}
              required
            />

            <TextField
              id="phoneNumber"
              label="Phone Number"
              helperText="Phone Number"
              onChange={this.handleChange}
              margin="normal"
              name="staffPhone"
              variant="outlined"
              value={this.state.staffPhone ? this.state.staffPhone : ""}
              required
            />

            <TextField
              id="emailAddress"
              label="emailAddress"
              helperText="Email Address"
              onChange={this.handleChange}
              margin="normal"
              name="staffEmail"
              variant="outlined"
              value={this.state.staffEmail ? this.state.staffEmail : ""}
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

export default AddStaff;
