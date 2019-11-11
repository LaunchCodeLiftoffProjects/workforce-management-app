import React from 'react'
import axios from 'axios'
import EmployeeListItem from './EmployeeListItem'
import { List, Divider } from '@material-ui/core'

export default class EmployeeList extends React.Component {
 state = {
     employees: [],
 }

 componentDidMount() {
     axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
         this.setState({ employees: res.data })
     })
 }

 render() {
     return (

     <List>
        {this.state.employees.map(
             employee =>
                <div>
                    <EmployeeListItem name={employee.name} employer={employee.company.name}/>
                    <Divider variant="middle"/>
                </div>
        )}
    </List>
     )
 }
}