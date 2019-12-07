import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar } from '@material-ui/core'

export const NavBar = ({ color }) => (
    <AppBar color={color}>
        <Toolbar>
            <Link to="/">
                <Button>Home</Button>
            </Link>
            <Link to="/timeClock">
                 <Button>TimeClock</Button>
             </Link>
             <Link to="/crudClients">
                 <Button>Crud Clients</Button>
             </Link>
        </Toolbar>
    </AppBar>
)