import React from 'react'
import { Container, TextField, Select } from '@material-ui/core'
import EmployeeList from '../components/EmployeeList'



export default () => {
  return (
    <Container>
      <span>
        <Select></Select>
        <TextField></TextField>
      </span>
      <EmployeeList/>
    </Container>
  )
}