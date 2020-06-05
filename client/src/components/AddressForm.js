import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const AddressForm = (props) => {
  const history = useHistory();
  const classes = useStyles();

  const {
    user
  } = props;

  const [street, setStreet] = useState('');
  const [streetLineTwo, setStreetLineTwo] = useState('');
  const [city, setCity] = useState('');
  const [geoState, setGeoState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleStreet = e => {
    console.log('Address : ',street)
    setStreet(e.target.value)
  }
  const handleStreetLineTwo = e => {
    console.log('Street 2:', streetLineTwo)
    setStreetLineTwo(e.target.value)
  }
  const handleCity = e => {
    console.log('CITY: ',city)
    setCity(e.target.value)
  }
  const handleGeoState = e => {
    console.log('GeoState: ',geoState)
    setGeoState(e.target.value)
  }

  const handleZipCode = e => {
    console.log('ZIP CODE:', zipCode)
    setZipCode(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let fullAddress = `${street}, ${city}, ${geoState} ${zipCode}`;
    // console.log(state);
    let address = {
      address: fullAddress, streetLineTwo, city, geoState, zipCode
    }
    axios.post(`/api/addresses/${user.id}`, address)
      // .then(res => props.initialAddress(res.data.id))
      .then(()=> props.getAddressesByUser(user.id))
      .then(()=> history.push('/signup/student'))
      .catch(err=> console.log(err))
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
      <TextField id='street' label="Street" required onChange={handleStreet} />
      <TextField id='streetLineTwo' label="Street Line 2" onChange={handleStreetLineTwo} />
      <TextField id='city' label="City" onChange={handleCity} required />
      <TextField id='geoState' label='State' onChange={handleGeoState} />
      <TextField id='zipcode' label='Zip Code' required  onChange={handleZipCode}/>
      <Button variant='contained' color='secondary' type='submit'>Next </Button>
    </form>
  );
}

export default AddressForm;