import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import moment from 'moment';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function AvailabilitiesTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Teacher </TableCell>
            <TableCell align="right">Schedule</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">Student</TableCell>
            <TableCell align="right">Lesson package</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.availabilities.map((avail) => (
            <TableRow key={avail.teacher_availability_id}>
              <TableCell component="th" scope="row">
                {`${avail.teacher_first_name} ${avail.teacher_last_name}`}
              </TableCell>
              <TableCell align="right">{`${moment(avail.start_time_stamp, 'YYYY-MM-DDTHH:mm:ss z').format('dddd')}s at ${moment(avail.start_time_stamp, 'YYYY-MM-DDTHH:mm:ss Z').format('hh:mm a')}`}</TableCell>
              <TableCell align="right">{moment(avail.start_time_stamp).format('MM/DD')}</TableCell>
              <TableCell align="right">{`${avail.student_first_name} ${avail.student_last_name}`}</TableCell>
              <TableCell align="right">{`${avail.lesson_duration}-minute ${avail.instrument_name}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}