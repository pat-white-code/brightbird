import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TeacherWeek = () => {
  let rows = [1, 2, 3]
  const classes = useStyles()
  return (
    <Container>
    <h3>Weekly Work Schedule</h3>
    <p>These are the regular hours you are available to teach. Chaning these hours will effect your availability for new clients, but will not affect currently scheduled lessons. Do not make changes here for temporary changes.</p>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Day of the Week </TableCell>
            <TableCell align="right">Start Time</TableCell>
            <TableCell align="right">End Time</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                Mondays
              </TableCell>
              <TableCell align="right">12:00 PM</TableCell>
              <TableCell align="right">7:00 PM</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Container>
  )
}

export default TeacherWeek