import React from 'react'
import {List, ListItem, ListItemText} from '@mui/material';

export default function Todo(props) {
  return (
    <List>
        <ListItem>
            <ListItemText primary={props.text} secondary={props.time} />
        </ListItem>
    </List>
  )  
}
