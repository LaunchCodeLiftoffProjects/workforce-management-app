import React, { Component } from "react";

//import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table-next";
//import { Link } from "react-router-dom";

class listEmployer extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      employer: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("http://localhost:8080/employer")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          employer: data
        });
      });
  }

  CellFormatter(cell, row) {
    return (
      <td>
        <a href={"/editLocations/" + row.id}>{cell}</a>
      </td>
    );
  }

  render() {
    return (
      <div>
        <table>
          {this.state.employer.map(employer => (
            <tr>
              <td>
                {employer.id} {employer.name}
              </td>

              <td>{employer.address}</td>
              <td>{employer.city}</td>
              <td>{employer.state}</td>
              <td>{employer.zip}</td>
              <td>{employer.phone}</td>
              <a href="/page2/">
                <button>Edit</button>
              </a>
            </tr>
          ))}
        </table>
        <a href="/page5/">
          <button>Add New Store</button>
        </a>
      </div>
    );
  }
}

export default listEmployer;
