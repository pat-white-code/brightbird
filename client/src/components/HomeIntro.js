import React from 'react';
import { Container, Typography, Button, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 50
  },
  header: {
    marginBlockEnd: '50px'
  }
})

const HomeIntro = () => {
  const classes = useStyles()
  return(
    <Container className={classes.root}>
      <Typography className={classes.header} variant='h4'>
        Music Lessons in Your Home
      </Typography>
      <Button variant='contained' color='primary'>
        See Teacher Availability
      </Button>
    </Container>
  )
}

export default HomeIntro;