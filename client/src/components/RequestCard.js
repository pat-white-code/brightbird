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
import EditRequestModal from './EditRequestModal';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function RequestCard(props) {
  const classes = useStyles();

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
          image={getInstrumentImage(props.request.instrument_id)}
          title={props.request.instrument_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${props.request.lesson_duration}-minute ${props.request.instrument_name}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <EditRequestModal request={props.request} />
        <IconButton onClick={()=>{props.deleteRequest(props.request.id)}}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}