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

export default function InstrumentCard(props) {
  const classes = useStyles();
  const {instrument, deleteTeacherInstrument} = props;

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
          image={getInstrumentImage(instrument.instrument_id)}
          title={instrument.instrument_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {`${instrument.instrument_name}`}
          </Typography>
          <Typography gutterBottom>
            {`Ages ${instrument.min_age} and Up`}
          </Typography>
          <Typography gutterBottom >
            {`${instrument.max_exp} Years of Experience and Beyond`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <EditRequestModal request={props.request} /> */}
        <IconButton onClick={()=>{deleteTeacherInstrument(instrument.id)}}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}