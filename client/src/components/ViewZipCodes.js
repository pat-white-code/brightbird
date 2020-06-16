import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { useEffect } from 'react';
import axios from 'axios';

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

  const handleDelete = () => {
    alert('You clicked the delete icon.');
  };


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