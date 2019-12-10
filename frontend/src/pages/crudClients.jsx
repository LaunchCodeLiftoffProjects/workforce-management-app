import React from "react";
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
      showEditPopup: false,
      showNewPopup: false,
      toEdit: []
    };

    this.handleClientChange = this.handleClientChange.bind(this);

  }

  toggleEditPopup() {
    this.setState({ showEditPopup:!this.state.showEditPopup });
  }


  toggleNewPopup() {
    this.setState({ showNewPopup:!this.state.showNewPopup });
  }

  handleClientChange() {
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
    this.toggleEditPopup();
    this.setState({
      toEdit: row,
      showNewPopup: false
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
    this.handleClientChange.bind(this);
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
        <button onClick={this.handleClientChange}>Click to refresh Clients</button>
        {this.state.showEditPopup ?
        <div>  
        <h1>Edit this Client:</h1>
        <EditClientPopup  
        clientInfo={this.state.toEdit}  
        closeEditPopup={this.toggleEditPopup.bind(this)}
        onClientEdit={this.handleClientChange.bind(this)}  
        ></EditClientPopup> 
        </div> 
        : null  
        }
        {!this.state.showEditPopup ? 
        <div>
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
                  <button value={row} onClick={e => {
                      this.onEdit(e, row);}}>Edit</button>  
                    <button value={row.id} onClick={e => {
                      this.onDelete(e);}} >Delete</button>
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
        <button type="button" onClick={this.toggleNewPopup.bind(this)}>Click Me!</button>
        <p>
          When add new client is clicked, the form below will pop up. It will
          not be showing until onClick
        </p>
        </div>
        : null  
        }
        {this.state.showNewPopup ?
        <AddClient   
        closeNewPopup={this.toggleNewPopup.bind(this)}
        onClientAdd={this.handleClientChange}
        ></AddClient>
        : null  
        }
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
      this.props.closeNewPopup()
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
    axios
      .post("http://localhost:8080/client/" + data.id, {
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

      this.props.onClientEdit();
      this.props.closeEditPopup();
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