import React, {useState, useEffect} from 'react';
import { Typography, Select, FormControl, makeStyles, InputLabel, MenuItem, Button } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const EditMaxDrive = (props) => {
  const {teacher, getTeacherInfo, dbUpdatedAt, editMaxDrive} = props;
  const classes = useStyles();
  const [maxDrive, setMaxDrive] = useState(teacher.info.max_drive);
  // useEffect(() => {getTeacherInfo(teacher.id)}, []);

  const handleChange = (e) => {
    // hit route to change teacher drive time
    setMaxDrive(e.target.value);
    console.log('MAX DRIVE:', maxDrive)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let body = {teacherId: teacher.id, maxDrive}
    editMaxDrive(body);
  }

  return (
    <div>
      <Typography>
        Maximum Drive Time
      </Typography>
      <Typography>
        This setting adjusts your maximum drive time between students for new appointments. This will not affect current student scheduling
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl className={classes.formControl}>
          <InputLabel id="max-drive-time">Maximum Drive Time</InputLabel>
          <Select
            labelId="max-drive-time"
            id="max-drive-time"
            value={maxDrive}
            onChange={handleChange}
          >
            <MenuItem value={10}>10 Minutes</MenuItem>
            <MenuItem value={15}>15 Minutes</MenuItem>
            <MenuItem value={20}>20 Minutes</MenuItem>
            <MenuItem value={25}>25 Minutes</MenuItem>
            <MenuItem value={30}>30 Minutes</MenuItem>
            <MenuItem value={35}>35 Minutes</MenuItem>
          </Select>
        </FormControl>
        <Button type='submit'>Save</Button>
      </form>
    </div>
  )
}

export default EditMaxDrive;