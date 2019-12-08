import React, { Component } from "react";
import DynamicForm from "../crudClientsComponents/index";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

export default class crudClients extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      client: []
    };
  }

  onSubmit = e => {
    e.preventDefault();
    let data = e.target.value;
    alert(this.state.data);
    this.setState({ data });
    axios
      .post("http://localhost:8080/client/new", {
        name: this.state.data
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  onChange = e => {
    let data = e.target.value;
    this.setState({ data });
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("http://localhost:8080/client")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          client: data
        });
      });
  }

  render() {
    return (
      <div>
        <h2>SWEP Clients</h2>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">First Name</TableCell>
                <TableCell align="left">Last Name&nbsp;</TableCell>
                <TableCell align="left">Email&nbsp;</TableCell>
                <TableCell align="left">Phone&nbsp;</TableCell>
                <TableCell align="left">Edit Client&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.client.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.firstName}
                  </TableCell>
                  <TableCell align="left">{row.lastName}</TableCell>
                  <TableCell align="left">{row.clientEmail}</TableCell>
                  <TableCell align="left">{row.clientPhone}</TableCell>

                  <TableCell align="left">
                    <button>Edit</button>
                    <button>Delete</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <br></br>
        <label>
          <b>Add a New Client: </b>
        </label>
        <button>Click Me!</button>{" "}
        <p>
          When add new client is clicked, the form below will pop up. It will
          not be showing until onClick
        </p>
        <div className="crud-form">
          <form
            className="dynamic-form"
            onSubmit={e => {
              this.onSubmit(e);
            }}
          >
            <div className="form-group">
              <label className="form-label">First Name:</label>
              <input
                type="text"
                name="client-id"
                id="client-id"
                onChange={e => {
                  this.onChange(e);
                }}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Last Name:</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                onChange={e => {
                  this.onChange(e);
                }}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone:</label>
              <input
                type="text"
                name="clientPhone"
                id="clientPhone"
                onChange={e => {
                  this.onChange(e);
                }}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email:</label>
              <input
                type="text"
                name="clientEmail"
                id="clientEmail"
                onChange={e => {
                  this.onChange(e);
                }}
              />
            </div>
            <div className="form-group">
              <button type="submit" id="client-id">
                Submit
              </button>
            </div>
          </form>
        </div>
        <pre style={{ width: "300px" }}>{JSON.stringify(this.state.data)}</pre>
      </div>
    );
  }
}
