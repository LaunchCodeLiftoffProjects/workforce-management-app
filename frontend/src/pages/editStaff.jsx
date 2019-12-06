import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import TextField from "@material-ui/core/TextField";

class EditStaff extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      staff: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const data = await fetch(
      "http://localhost:8080/staff/" + this.props.match.params.id
    );
    const response = await data.json();

    this.setState({ staff: response });
  }

  handleSubmit() {
    return fetch("http://localhost:8080/staff/" + this.state.staff.id, {
      method: "PUT",
      mode: "CORS",
      body: this.state.staff,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res;
      })
      .catch(err => err);
  }

  handleChange(event) {
    this.setState({ staff: { [event.target.name]: event.target.value } });
  }

  render() {
    return (
      <div>
        <h3>Edit Staff Member:</h3>
        <div>
          <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
            <TextField
              id="firstName"
              label="First Name"
              helperText="First Name"
              onChange={this.handleChange}
              margin="normal"
              name="firstName"
              variant="outlined"
              value={
                this.state.staff.firstName ? this.state.staff.firstName : ""
              }
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
              value={this.state.staff.lastName ? this.state.staff.lastName : ""}
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
              value={
                this.state.staff.staffPhone ? this.state.staff.staffPhone : ""
              }
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
              value={
                this.state.staff.staffEmail ? this.state.staff.staffEmail : ""
              }
              required
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

export default EditStaff;
