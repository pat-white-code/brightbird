import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import moment from 'moment';

const useStyles = makeStyles({
  tbody: {
  }
});


export default function AvailabilitiesTable(props) {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Schedule</TableCell>
            <TableCell align="center">Start Date</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tbody}>
          {props.avails.map((avail) => (
            <TableRow key={avail.teacher_availability_id}>
              <TableCell align="center">{`${moment(avail.start_time_stamp, 'YYYY-MM-DDTHH:mm:ss Z').format('dddd')}s at ${moment(avail.start_time_stamp, 'YYYY-MM-DDTHH:mm:ss Z').format('h:mm a')}`}</TableCell>
              <TableCell align="center">{moment(avail.start_time_stamp).format('MM/DD')}</TableCell>
              <TableCell align="center"><button>Book Lesson</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}