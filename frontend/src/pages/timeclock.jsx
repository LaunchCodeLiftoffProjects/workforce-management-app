import React from 'react'
import { useState } from 'react'
import axios from 'axios'
//import TimeClientIdForm from './components/timeClientIdForm'

export default () => {
    const [clientId, setClientId] = useState('')
    const [clientName, setClientName] = useState('')
    const [errMsg, setErrMsg] = useState('')
    //default state for client is clocked out
    //const [clientState, setClientState] = useState(false)
    //var [clientValid, setClientValid] = useState(false)
    //var [clientName, setClientName] = useState('')

    const handleChange = (x) => {setClientId(x.target.value); setErrMsg('')}

    const handleClick1= (e) => {e.preventDefault(); console.log(e);
        axios.get(`http://localhost:8080/client/${clientId}`)
        .then((res) => {console.log(res);
            setClientName(res.data.name);
            //get clientState from timestamp
            axios.get(`http://localhost:8080/timeclock/${clientId}`)
            .then((res) => {console.log(res)})
            .catch(console.error())
            })
        .catch(() => {setErrMsg('Id not found')})}

    //const handleClick2= (e) => {e.preventDefault(); setClientState(target.clientState)}    

     const handleClick2= (e) => {e.preventDefault(); 
         axios.post(`http://localhost:8080/timeclock`, {
            id: clientId,  name: clientName} )
         .then((res) => {console.log(res);})}   

    return (
    <div> 
        <form>
            <label>
                (clientId) Enter your ID: 
                <input type="text" value={clientId} name="clientId" onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" onClick={handleClick1} />
        </form>
        <p>{errMsg}</p>
        Welcome to Workforce:
        <p>{clientName}</p>
        <form>
            <input type="submit" value="clock **Out"
            onClick={handleClick2} />
        </form>
        </div>     
    )}