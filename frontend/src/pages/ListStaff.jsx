import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

class ListStaff extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,

      staff: [
        {
          firstName: ""
        }
      ]
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("http://localhost:8080/staff")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          staff: data
        });
      });
  }

  render() {
    return (
      <Paper>
        <div>
          <h2>Staff</h2>
        </div>
        <Table>
          <colgroup>
            <col style={{ width: "20%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "25%" }} />
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell align="left" fontSize="500em">
                First Name
              </TableCell>
              <TableCell align="left">Last Name&nbsp;</TableCell>
              <TableCell align="left">Email&nbsp;</TableCell>
              <TableCell align="left">Phone&nbsp;</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.staff.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell align="left">{row.lastName}</TableCell>
                <TableCell align="left">{row.staffEmail}</TableCell>
                <TableCell align="left">{row.staffPhone}</TableCell>
                <TableCell align="left">
                  <Link to={"/EditStaff/" + row.id} className="btn btn-link">
                    <Button color="gray">
                      <span>Edit or Delete</span>
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div>
          <br></br>
          <br></br>
          <Link to="/AddStaff" className="btn btn-primary">
            Add Staff
          </Link>
        </div>
        ;
      </Paper>
    );
  }
}
export default ListStaff;
