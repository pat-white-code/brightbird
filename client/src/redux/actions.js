import axios from 'axios';

export const initialLogin = (userId) => {
  return {type: 'INITIAL_LOGIN', payload: userId}
}
export const setUserId = (userId) => {
  return {type: 'SETS_USER_ID', payload: userId}
}

const isLoggedIn = () => {
  return {type: 'USER_LOGS_IN'}
}

export const userLogin = (user) => {
  return (dispatch) => {
    axios.post('api/users/auth/login', user)
        .then(json => {
          console.log(json)
          let userId = json.data.id
          // document.cookie = "loggedIn=true;max-age=60*1000"
          dispatch(isLoggedIn());
          dispatch(setUserId(userId));
          dispatch(getRequestsWithAvail(userId));
          dispatch(getStudentsByUser(userId));
          dispatch(getAddressesByUser(userId));
        })
  }
}

export const fetchClientRequests = (userId) => {
  return (dispatch) => {
    axios.get(`/api/requests/client/${userId}`)
      .then(res => {
        console.log(res)
        let requests = res.data
        dispatch({type:'FETCH_SUCCESSFUL', payload:requests})
      })
  }
}

export const getAddressesByUser = userId => {
  return async dispatch => {
    let response = await axios.get(`/api/addresses/client/${userId}`)
    let addresses = response.data;
    dispatch({type:'GETS_USER_ADDRESSES', payload:addresses})
  }
}

export const getRequestsWithAvail = (userId) => {
  return async dispatch => {
    let response = await axios.get(`/api/availabilities/${userId}`)
    console.log('GET AVAILABILITIES: ', response.data);
    let requestsWithAvail = response.data;
    dispatch({type:'GETS_REQUESTS_WITH_AVAIL', payload:requestsWithAvail})
  }
}

export const getStudentsByUser = userId => {
  return async dispatch => {
    let response = await axios.get(`/api/students/client/${userId}`)
    let students = response.data;
    console.log('GET STUDENTS BY USER', response);
    dispatch({type:'GETS_USER_STUDENTS', payload:students});
  }
}

export const addRequest = request => {
  return dispatch => {
    axios.post('/api/requests', request)
      .then(() => {
        dispatch({type:'DATABASE_UPDATED'})
      })
      .catch(err => console.log(err))
  }
}

export const editRequest = request => {
  return async dispatch => {
    try {
      let response = await axios.put('/api/requests/edit', request)
      console.log(response);
      dispatch({type:'DATABASE_UPDATED'})
    } catch(err) {
      console.log(err);
    }
  }
}

export const addStudent = (student, request) => {
  return async dispatch => {
    try {
      let postStudent = await axios.post('/api/students', student)
      console.log('POST STUDENT', postStudent)
      let studentId = postStudent.data.id
      let postRequest = await axios.post('/api/requests', {...request, studentId})
      console.log(postRequest)
      dispatch({type:'DATABASE_UPDATED'})
    } catch(err) {
      console.log(err)
    }
  }
}

export const deleteRequest = requestId => {
  return (dispatch) => {
    axios.delete(`/api/requests/delete/${requestId}`)
      .then(res => {
        console.log(res)
        dispatch({type:'DATABASE_UPDATED'})
      })
  }
}

export const setRequests = (requests) => {
  return {type: 'SET_REQUESTS', payload:requests}
}

export const addUserAddress = (userId, address) => {
  return async dispatch => {
    try {
      let response = await axios.post(`/api/addresses/${userId}`, address);
      dispatch({type:'DATABASE_UPDATED'})
      getAddressesByUser(userId);
      return response
    }
    catch(err) {
      alert(err)
    }
  }
}

// export const initialAddress = (addressId) => {
//   return {type: 'INITIAL_ADDRESS', payload: addressId}
// }

// export const fetchTeacherAvailability = (userId) => {
//   return (dispatch) => {
//     axios.get(`/api/requests/client/${userId}`)
//       .then(res => {
//         console.log('FETCH REQUESTS:', res)
//         let requests = res.data
//         requests.forEach(request => {
//           const { id, student_age, instrument_id, zip_code } = request
//           axios.get(`api/teachers/?instId=${instrument_id}&zipCode=${zip_code}&studentAge=${student_age}`)
//             .then(res => {
//               console.log(res, 'REQUEST ID:', id)
//               request.availableTeachers = res.data
//               console.log(request);
//               dispatch({type: 'FETCHES_TEACHER_AVAILABILITY', payload:request})
//             })
//             // .then(dispatch({type:'FETCHES_TEACHER_AVAILABILITY', payload:requests}))
//         })
//       })
//   }
// }

// export const fetchQualifiedTeachers = (request) => {
//   return (dispatch) => {
//   // const { id, student_age, instrument_id, zip_code } = request
//   axios.get(`api/teachers/?instId=${request.instrument_id}&zipCode=${request.zip_code}&studentAge=${request.student_age}`)
//     .then(res => {
//       console.log('FETCH QUALIFIED TEACHERS: ',res)
//       let teachers = res.data
//       dispatch({type:'FETCH_QUALIFIED_TEACHERS', payload: {requestId:request.id, teachers}})
//     })
//   }
// }

// export const fetchTeacherSchedule = request => {
//   return (dispatch) => {
//     request.availableTeachers.forEach(teacher => dispatch({type:'FETCHES_TEACHER_SCHEDULE', payload:{teacherId: teacher.teacher_id, schedule: [1, 2, 3]}}))
//   }
// }

// export const getUserBusinesses = userId => {
//   return (dispatch) => {
//     axios.get(`/businesses/${userId}`)
//       .then(res => {
//         console.log(res)
//         let businesses = res.data
//         dispatch(getsUserBusinesses(businesses))
//       })
//   }
// }

//   axios.post('/api/students', {firstName, lastName, dob, clientId:props.user.id})
//       .then(res => {
//         console.log(res)
//         console.log('postRequests', res.data.id, instrumentId, lessonDuration, studentAge, addressId, experience)
//         axios.post('/api/requests', {studentId: res.data.id, instrumentId, lessonDuration, studentAge, addressId, experience})
//         .then(res => console.log(res))
//         .then(()=> {
//           // If this is the modal, close modal, if this is the initial add student page, push history to availability.
//           if(props.handleClose) {
//             props.handleClose()
//           } else {
//             history.push('/availability')
//           }
//         })
//       }).catch(err => alert(err))

// export const deleteRequest = requestId => {
//   return dispatch => {
//     axios.delete(`/api/requests/delete/${requestId}`)
//       .then(response => response.data)
//       .then(()=> dispatch({type:'DATABASE_UPDATED'}))
//       .catch(err=> console.log(err))
//   }
// }

// export const promiseClientRequests = async (userId) => {
//   return (dispatch) => {
//     return new Promise ((resolve, reject) => {
//       dispatch({ type: 'SET_LOADING', loading: true});
//       axios.get(`/api/requests/client/${userId}`)
//         .then(res => {
//           console.log(res);
//           let requests = res.data
//           dispatch({type: 'FETCH_SUCCESSFUL',payload:requests});
//           dispatch({type: 'SET_LOADING', loading: false});
//           resolve(requests);
//         }).catch(err => {console.log('ERR',err); reject(err)})
//     })
//   }
// }

// export const getSchedulesByRequest = (request) => {
//   return (dispatch) => {
//     axios.get(`/api/schedules/request/${request.id}?instrumentId=${request.instrument_id}&zipCode=${request.zip_code}&studentAge=${request.student_age}`)
//       .then(res => {
//         console.log(res);
//         let schedules = res.data;
//         let updatedSchedules = schedules.map(schedule => {
//           return {...schedule, driveTime:10}
//         })
//         dispatch({type: 'FETCHES_TEACHER_SCHEDULES', payload:updatedSchedules})
//       })
//       // .then(schedules => dispatch({type: 'FETCHES_TEACHER_SCHEDULES', payload:schedules}))
//         // dispatch({type: 'FETCHES_TEACHER_SCHEDULES', payload:schedules})
//   }
// }

// export const getAvailabilitiesByUser = (userId) => {
//   return async dispatch => {
//     let response = await axios.get(`/api/availabilities/client/${userId}`)
//     console.log(response);
//     let availabilities = response.data;
//     dispatch({type:'GETS_AVAILABILITIES', payload:availabilities})
//   }
// }