import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import UserProfile from "./editLocations";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

class listEmployer extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      employer: []
    };
  }
  onClick = e => {
    let data = e.target.value;
    UserProfile.setName({ data });
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("http://localhost:8080/employer/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          employer: data
        });
      });
  }

  render() {
    return (
      <div>
        <h2>Store Locations</h2>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Store Name</TableCell>
                <TableCell align="left">Address&nbsp;</TableCell>
                <TableCell align="left">City&nbsp;</TableCell>
                <TableCell align="left">State&nbsp;</TableCell>
                <TableCell align="left">Zip&nbsp;</TableCell>
                <TableCell align="left">Phone&nbsp;</TableCell>
                <TableCell align="left">Edit Store&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.employer.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.address}</TableCell>
                  <TableCell align="left">{row.city}</TableCell>
                  <TableCell align="left">{row.state}</TableCell>
                  <TableCell align="left">{row.zip}</TableCell>
                  <TableCell align="left">{row.phone}</TableCell>
                  <TableCell align="left">
                    <a href={"/editLocations/"}>
                      <input type="hidden" name="id" id="id" value={row.id} />
                      <button
                        id="id"
                        name="id"
                        onClick={e => {
                          this.onClick(e);
                        }}
                      >
                        Edit
                      </button>
                    </a>

                    <button>Delete</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <br></br>
        <label>
          <b>Add a New Store: </b>
        </label>
        <button>Click Me!</button>

        <p>
          When add new store is clicked form will show below instead of a new
          page
        </p>
      </div>
    );
  }
}

export default listEmployer;
