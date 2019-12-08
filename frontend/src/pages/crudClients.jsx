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
      client: [],
      showPopup: false,
      toEdit: []
    };

    this.handleClientChange = this.handleClientChange.bind(this);

  }

  togglePopup() {
    this.setState({ showPopup:!this.state.showPopup });
  }

  handleClientChange(newClient) {
    this.setState({ loading: true });
    axios.get("http://localhost:8080/client")
    .then(res => {
      const client = res.data;
      this.setState({ client });
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  onEdit(e, row) {
    this.togglePopup();
    alert(row.firstName)
    this.setState({
      toEdit: row
    })
  };

  onDelete = e => {
    let data = e.target.value;
    axios
      .delete("http://localhost:8080/client/"+data)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios.get("http://localhost:8080/client")
    .then(res => {
      const client = res.data;
      this.setState({ client });
    })
    .catch(function(error) {
      console.log(error);
    });
  
  }

  render() {
    return (
      <div>
        <h2>SWEP Clients</h2>
        {this.state.showPopup ?
        <div>  
        <h1>Edit this Client:</h1>
        <EditClientPopup  
        clientInfo={this.state.toEdit}  
        closePopup={this.togglePopup.bind(this)}
        onClientEdit={this.handleClientChange}  
        ></EditClientPopup> 
        </div> 
        : null  
        }
        {!this.state.showPopup ? 
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
                  <button action="submit" value={row} onClick={e => {
                      this.onEdit(e, row);}}>Edit</button>  
                    <button action="submit" value={row.id} onClick={e => {
                      this.onDelete(e);}} >Delete</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        : null  
        }
        <br></br>
        <label>
          <b>Add a New Client: </b>
        </label>
        <button>Click Me!</button>{" "}
        <p>
          When add new client is clicked, the form below will pop up. It will
          not be showing until onClick
        </p>
        <AddClient onClientAdd={this.handleClientChange}></AddClient>
        <pre style={{ width: "300px" }}>{JSON.stringify(this.state.data)}</pre>
      </div>
    );
  }
}

class AddClient extends React.Component {

  constructor() {
    super();
    this.state = {
      firstName: "Jane",
      lastName: "Doe",
      clientPhone: "123-456-7890",
      clientEmail: "JaneDoe@swep.org"
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
    let data = this.state;
    alert(data);
    axios
      .post("http://localhost:8080/client", {
        firstName: data.firstName,
        lastName: data.lastName,
        clientPhone: data.clientPhone,
        clientEmail: data.clientEmail
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

      this.props.onClientAdd()
  };

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
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
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone:</label>
              <input
                type="text"
                name="clientPhone"
                value={this.state.clientPhone}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email:</label>
              <input
                type="text"
                name="clientEmail"
                value={this.state.clientEmail}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <button type="submit" >
                Submit
              </button>
            </div>
          </form>
        </div>

    )
  }

}

class EditClientPopup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {         
      id: props.clientInfo.id,
      firstName: props.clientInfo.firstName,
      lastName: props.clientInfo.lastName,
      clientPhone: props.clientInfo.clientPhone,
      clientEmail: props.clientInfo.clientEmail
    };

  this.handleInputChange = this.handleInputChange.bind(this);
  }


  onSubmit = e => {
    e.preventDefault();
    let data = this.state;
    alert(data.firstName);
    axios
      .put("http://localhost:8080/client", {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        clientPhone: data.clientPhone,
        clientEmail: data.clientEmail
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

      this.props.onClientEdit()
      this.props.closePopup()
  };

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="crud-form">
          <form
            className="dynamic-form"
            onSubmit={e => {
              this.onSubmit(e);
            }}
          >
             <div className="form-group">
              <input
                type="hidden"
                name="id"
                value={this.props.id}
              />
            </div>
            <div className="form-group">
              <label className="form-label">First Name:</label>
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone:</label>
              <input
                type="text"
                name="clientPhone"
                value={this.state.clientPhone}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email:</label>
              <input
                type="text"
                name="clientEmail"
                value={this.state.clientEmail}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <button type="submit" >
                Submit
              </button>
            </div>
          </form>
        </div>

    )
  }

}