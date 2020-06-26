import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function TimePicker(props) {
  const classes = useStyles();
  const {value, handleStartTime, label} = props;
  return (
    <TextField
      id="time"
      label={label}
      type="time"
      value={value}
      onChange={handleStartTime}
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        step: 600,
      }}
    />
  );
}