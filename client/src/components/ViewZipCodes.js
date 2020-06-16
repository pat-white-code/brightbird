import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function ViewZipCodes(props) {
  const classes = useStyles();
  const {zipCodes, deleteZipCode} = props;


  return (
    <div className={classes.root}>
      {zipCodes.map(zipCode => (
        <Chip
        key={zipCode.id}
        label={`${zipCode.zip_code}`}
        onDelete={()=>{deleteZipCode(zipCode.id)}}
      />
      ))}
    </div>
  );
}