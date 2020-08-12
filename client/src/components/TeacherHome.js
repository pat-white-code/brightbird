import React, { useEffect } from 'react';
import ViewInstruments from '../containers/ViewInstruments';
import { Container, Typography } from '@material-ui/core';
import EditServices from './EditServices';
import TeacherWeek from '../containers/TeacherWeek';
import TeacherSchedule from '../containers/TeacherSchedule';
import TeacherLessons from '../containers/TeacherLessons';
import styles from '../styles/TeacherHome.module.css';

const TeacherHome = (props) => {
  
  const {teacher} = props;

  return (
    <div className={styles['section']}>
      <Container>
        <div className ={styles.section}>
          <ViewInstruments className={styles['section']} />
        </div>
        <div className={styles['section']}>
          <EditServices teacher={teacher}/>
        </div>
        <div className={styles['section']}>
          <TeacherWeek />
        </div>
        <div className={styles['section']}>
          <TeacherSchedule />
        </div>
        <div className={styles['section']}>
          <TeacherLessons />
        </div>
      </Container>
    </div>
  )
}

export default TeacherHome;