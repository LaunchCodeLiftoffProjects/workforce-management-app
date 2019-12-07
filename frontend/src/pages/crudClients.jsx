import React, { Component } from "react";
import DynamicForm from "../crudClientsComponents/index";
import axios from "axios";

export default class crudClients extends React.Component {

  state = {
    data: []
  };

  onSubmit = (e) => {
    e.preventDefault();
    let data =  e.target.value;
    alert(this.state.data);
    this.setState({data});
    axios.post('http://localhost:8080/client/new', {
      name: this.state.data
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  onChange = (e) => {
    let data =  e.target.value;
    this.setState(
        {data}
      )
  }

  
  componentDidMount() {
    axios.get(`http://localhost:8080/client`)
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
        <div className="crud-form">
                <h3>Add a User</h3>
                <form className='dynamic-form' onSubmit={(e)=>{this.onSubmit(e)}}>
                <div className="form-group">
                    <label className="form-label">
                        Name:
                    </label>
                    <input type="text" name="client-id" id='client-id' onChange={(e)=>{this.onChange(e)}}/>
                </div>
                    <div className='form-group'>
                        <button type='submit' id="client-id">Submit</button>
                    </div>
                </form>
            </div>
      <pre style={{width:"300px"}}>
        {JSON.stringify(this.state.data)}
      </pre>
      </div>
    );
  }
}
