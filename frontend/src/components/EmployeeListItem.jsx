import React from 'react'
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core'

export default (props) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    {props.name.split(" ").map((n)=>n[0]).join("")}
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={props.name}
                secondary={props.employer}
            />
        </ListItem>
    )
}