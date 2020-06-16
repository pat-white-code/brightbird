import React, {useState } from 'react';
import { Container } from '@material-ui/core';
import AddZipCode from '../containers/AddZipCode';


const EditServices = () => {

  return(
    <Container>
      <h1>Edit Service Parameters</h1>
      <AddZipCode />
      {/* <EditMaxDrive /> */}
    </Container>
  )
}

export default EditServices;