import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core/Button";

class AddStaff extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      staff: {}
    };
  }

  handleSubmit(data) {
    return fetch("http://localhost:8080/staff/" + this.state.staff.id, {
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
        <h3>Add Staff Member:</h3>
        <div>
          <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
            <TextField
              id="firstName"
              label="First Name"
              defaultValue="First Name"
              helperText="First Name"
              margin="normal"
              variant="outlined"
              value={this.state.staff.firstName}
              required
            />

            <TextField
              id="lastName"
              label="Last Name"
              defaultValue="Last Name"
              helperText="Last Name"
              margin="normal"
              variant="outlined"
              value={this.state.staff.lastName}
              required
            />

            <TextField
              id="phoneNumber"
              label="Phone Number"
              defaultValue="(000) 000-0000"
              helperText="Phone Number"
              margin="normal"
              variant="outlined"
              value={this.state.staff.phoneNumber}
            />

            <TextField
              id="emailAddress"
              label="emailAddress"
              defaultValue="Email Address"
              helperText="Email Address"
              margin="normal"
              variant="outlined"
              value={this.state.staff.emailAddress}
            />

            <div>
              <button type="submit" color="primary">
                Save
              </button>
              &nbsp;
              <button>Cancel</button>&nbsp;
              <button color="secondary">Delete</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddStaff;
