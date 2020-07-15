import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function SubCard(props) {
  const classes = useStyles();
  const { sub, deleteSub } = props;

  const getInstrumentImage = (instrumentId) => {
    switch(instrumentId) {
      case 1:
        return 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      case 2:
        return "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      case 3:
        return 'https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      default: 
        return instrumentId
    }
  }

  return (
    <Card raised className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={getInstrumentImage(sub.instrument_id)}
          title={sub.instrument_name}
        />
        <CardContent>
          <Typography gutterBottom component="h5">
            {`${sub.day_of_week}s at ${moment('2020-01-01'+' ' + sub.time_).format('h:mm a')}`}
          </Typography>
          <Typography gutterBottom component="h5">
            {`${sub.lesson_duration}-minute ${sub.instrument} with ${sub.teacher_first_name} ${sub.teacher_last_name}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <EditRequestModal request={props.request} /> */}
        <IconButton onClick={() =>{ deleteSub(sub.id) }}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}