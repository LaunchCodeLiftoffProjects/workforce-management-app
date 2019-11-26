import React, { Component } from "react";
import DynamicForm from "../crudClientsComponents/index";
import axios from "axios";

export default class crudClients extends React.Component {
  //Write HTML inside render function
  state = {
    data: []
  };

  onSubmit = (model) => {
    alert(JSON.stringify(model));
    this.setState({
      data: [model, ...this.setState.data]
    })
  }

  
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const data = res.data;
        this.setState({ data });
        console.log(data);
      })
  }

  render() {
    return (
        <div>
        <h1>Create a Client</h1>
        <p>Welcome User!</p>
        <DynamicForm className="form"
        title="Register a new Client"
        model={[
          {key: "name", label: "Name", props: {required: true}},
        ]}
        onSubmit = {(model) => {this.onSubmit(model)}}
      />
      <pre style={{width:"300px"}}>
        {JSON.stringify(this.state.data)}
      </pre>
      </div>
    );
  }
}
