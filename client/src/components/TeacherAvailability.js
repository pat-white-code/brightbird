import React, {useEffect} from 'react';
import { Container, Button } from '@material-ui/core';
import TeacherCard from './TeacherCard';
import LoadingModal from './LoadingModal';
import { getUserSubscriptions, refreshUserAvails } from '../redux/actions';
// import { getRequestsWithAvail } from '../redux/actions';
// import moment from 'moment';


const TeacherAvailability  = (props) => {
  const {
    dbUpdatedAt,
    user,
    requests,
    getUserLessons,
    getUserSubscriptions,
    refreshUserAvails,
    isLoading
  } = props

  useEffect(() => {
    // getStudentsByUser(user.id)
    // getRequestsWithAvail(user.id)
    refreshUserAvails(user.id)
    getUserSubscriptions(user.id)
    getUserLessons(user.id)
    // https://github.com/facebook/create-react-app/issues/6880
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dbUpdatedAt]);


  return(
    <Container maxWidth="md">
      {requests.map(request => (
        <>
          {isLoading && (
            <LoadingModal />
          )}
          <h1>
            {`Teachers Available for ${request.first_name}`}
          </h1>
          <h4>{`${request.lesson_duration}-minute ${request.instrument_name}`}</h4>
          {request.availableTeachers.map(teacher => (
            <TeacherCard teacher={teacher} />
          ))}
        </>
      ))}
      <Button onClick={() => {refreshUserAvails(user.id)}}>Refresh Availabilities</Button>
    </Container>
  )
}

export default TeacherAvailability;