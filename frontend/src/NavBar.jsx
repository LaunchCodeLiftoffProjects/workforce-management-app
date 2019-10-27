import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar } from '@material-ui/core'

export const NavBar = ({ color }) => (
    <AppBar color={color}>
        <Toolbar>
            <Link to="/">
                <Button>Page One</Button>
            </Link>
            <Link to="/page2">
                <Button>Page Two</Button>
            </Link>
            <Link to="/page3">
                <Button>Page Three</Button>
            </Link>
            <Link to="/page4">
                <Button>Page Four</Button>
            </Link>
        </Toolbar>
    </AppBar>
)