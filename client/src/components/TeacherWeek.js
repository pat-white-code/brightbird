import React, { useEffect } from 'react';
import { Container, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import AddTeacherWeekModal from './AddTeacherWeekModal';
import MoreVert from './MoreVert';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TeacherWeek = (props) => {
  const {
    teacher,
    getTeacherWeek,
    dbUpdatedAt,
    deleteTeacherWeek
  } = props;

  const days = [
    [1, 'Mondays'],
    [2, 'Tuesdays'],
    [3, 'Wednesdays'],
    [4, 'Thursdays'],
    [5, 'Fridays'],
    [6, 'Saturdays'],
    [7, 'Sundays']
  ]
  useEffect(() => {
    getTeacherWeek(teacher.id)
    // getRequestsWithAvail(user.id)
    // https://github.com/facebook/create-react-app/issues/6880
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dbUpdatedAt]);

  const unlistedDays = days.filter(day => teacher.week.some(weekday => weekday.day_id === day[0]) === false);
  console.log('Unlisted Days', unlistedDays) 
  const classes = useStyles()
  return (
    <Container>
      <Typography variant={'h4'} gutterBottom>Weekly Work Schedule</Typography>
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
            {teacher.week.map(weekday => (
              <TableRow key={weekday.id}>
                <TableCell component="th" scope="row">
                  {`${weekday.day_of_week}s`}
                </TableCell>
                <TableCell align="right">{moment(weekday.start_time, 'HH:mm').format('h:mm A')}</TableCell>
                <TableCell align="right">{moment(weekday.end_time, 'HH:mm').format('h:mm A')}</TableCell>
                <TableCell align="right">
                  <MoreVert week={weekday} deleteTeacherWeek={deleteTeacherWeek} />
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell component="th" scope="row">
                <IconButton>
                  <AddTeacherWeekModal days={unlistedDays}/>
                </IconButton>
              </TableCell>
              <TableCell />
              <TableCell />
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
  </Container>
  )
}

export default TeacherWeek