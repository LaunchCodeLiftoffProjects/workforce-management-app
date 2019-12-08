import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
      employer: [
        {
          name: ""
        }
      ]
    };
  }

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
                    <a href={"/editlocations/"}>
                      <button>Edit</button>
                    </a>
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
        <a href="/addlocations">
          <button>Click Me!</button>
        </a>
      </div>
    );
  }
}

export default listEmployer;
