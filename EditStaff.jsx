import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

class EditStaff extends Component {
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
    this.handleDelete = this.handleDelete.bind(this);
  }

  async componentDidMount() {
    const data = await fetch(
      "http://localhost:8080/staff/" + this.props.match.params.id
    );
    const response = await data.json();

    this.setState({
      id: this.props.match.params.id,
      firstName: response.firstName,
      lastName: response.lastName,
      staffEmail: response.staffEmail,
      staffPhone: response.staffPhone
    });
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

  handleDelete(event) {
    event.preventDefault();

    const body = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      staffEmail: this.state.staffEmail,
      staffPhone: this.state.staffPhone
    };
    axios
      .delete("http://localhost:8080/staff/" + this.props.match.params.id)
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

            <div>
              <button type="submit" color="primary">
                Save
              </button>
              &nbsp;
              <button>Cancel</button>&nbsp;
              <button onClick={this.handleDelete} color="secondary">
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditStaff;
