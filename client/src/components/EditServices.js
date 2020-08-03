import React from 'react';
import { Container, Card, Typography } from '@material-ui/core';
import AddZipCode from '../containers/AddZipCode';
import EditMaxDrive from '../containers/EditMaxDrive';
import styles from '../styles/EditServices.module.css';


const EditServices = (props) => {
  const {teacher} = props;

  return(
    <Container>
      <div className={styles['card']}>
        {/* <h1 className={styles['header']}>Edit Service Parameters</h1> */}
        <Typography variant={'h4'} gutterBottom>Edit Service Parameters</Typography>
        <div class={styles['services-container']}>
          <AddZipCode />
          {teacher.info.max_drive && (
            <EditMaxDrive />
          )}
        </div>
      </div>
    </Container>
  )
}

export default EditServices;