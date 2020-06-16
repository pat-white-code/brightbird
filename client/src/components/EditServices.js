import React from 'react';
import { Container, Card } from '@material-ui/core';
import AddZipCode from '../containers/AddZipCode';
import EditMaxDrive from '../containers/EditMaxDrive';


const EditServices = (props) => {
  const {teacher} = props;

  return(
    <Container>
      <Card>
        <h1>Edit Service Parameters</h1>
        <AddZipCode />
        {teacher.info.max_drive && (
          <EditMaxDrive />
        )}
      </Card>
    </Container>
  )
}

export default EditServices;