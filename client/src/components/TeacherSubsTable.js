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
import EditSubModal from './EditSubModal';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function TeacherSubsTable(props) {
  const classes = useStyles();
  const { subs } = props

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="teacher subscriptions">
        <TableHead>
          <TableRow>
            <TableCell>Student</TableCell>
            <TableCell align="right">Schedule</TableCell>
            <TableCell align="right">Lesson Duration</TableCell>
            <TableCell align="right">Instrument</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subs.map((sub) => (
            <TableRow key={sub.id}>
              <TableCell component="th" scope="row">
                {sub.first_name + ' ' + sub.last_name}
              </TableCell>
              <TableCell align="right">{sub.day_of_week + 's' + ' at ' + moment('2020-01-01 ' + sub.time_).format('h:mm a')}</TableCell>
              <TableCell align="right">{sub.lesson_duration + ' Minutes'}</TableCell>
              <TableCell align="right">{sub.instrument_name}</TableCell>
              <TableCell align="right">{sub.address}</TableCell>
              <TableCell align="right">
                <EditSubModal sub={sub} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}