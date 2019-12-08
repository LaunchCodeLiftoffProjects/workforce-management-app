import React from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

class Editlocations extends React.Component {
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
  async componentDidMount() {
    const data = await fetch(
      "http://localhost:8080/employer/" + this.props.match.params.id
    );
    const response = await data.json();

    this.setState({
      id: this.props.match.params.id,
      name: response.name,
      address: response.address,
      city: response.city,
      state: response.state,
      zip: response.zip,
      phone: response.phone
    });
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
        <h2>Edit Store Location</h2>
        <div>
          <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
            <TextField
              id="name"
              label="Store Name"
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

export default Editlocations;
