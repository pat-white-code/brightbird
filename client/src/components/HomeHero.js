import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '75vh',
    border: '1px red solid'
  }
});

const HomeHero = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" className={classes.root}>
          <Typography variant='h1'>BrightBird Music  </Typography>
      </Container>
    </>
  );
}

export default HomeHero;