import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Submit from './Submit'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    color:"#cc0000"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    color:"#cc0000"
  },
}));

export default function GuestTime() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
    
      <TextField
        id="time"
        label="start time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
          color:"#cc0000"
        }}
        inputProps={{
          step: 300,
          color:"#cc0000" // 5 min
        }}
      />
      <TextField
        id="time"
        label="expected end time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      <br />
      <Submit />
    </form>
  );
}