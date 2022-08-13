import React from 'react'
import {List, ListItem, ListItemText} from '@mui/material';
import { ClearOutlined } from '@mui/icons-material';

export default function Todo(props) {
  return (
    <div className='flex items-center'>
        <List>
            <ListItem>
                <ListItemText primary={props.text} secondary={props.time} />
            </ListItem>
        </List>
        <ClearOutlined onClick={() => {props.onClick()} } />
    </div>
  )  
}
