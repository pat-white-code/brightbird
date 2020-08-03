import axios from 'axios';
import moment from 'moment';

export const loadingData = () => {
  return {type: 'LOADING_DATA'}
}

export const dataSuccess = () => {
  return {type: 'DATA_SUCCESS'}
}

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
          dispatch(refreshUserAvails(userId));
          // document.cookie = "loggedIn=true;max-age=60*1000"
          dispatch(isLoggedIn());
          dispatch(setUserId(userId));
          dispatch(getStudentsByUser(userId));
          dispatch(getAddressesByUser(userId));
          dispatch(getRequestsWithAvail(userId));
          dispatch(getUserLessons(userId));
          dispatch(getUserSubscriptions(userId));
        })
  }
}

export const refreshUserAvails = userId => {
  return async dispatch => {
    try {
      dispatch(loadingData());
      let response = await axios.get(`/api/availabilities/refresh/user/${userId}`);
      dispatch(dataSuccess());
      console.log(response.data);
      // dispatch({type: 'DATABASE_UPDATED'})
      dispatch(getRequestsWithAvail(userId));
    } catch(err) {alert(err)}
  }
}

export const getUserSubscriptions = userId => {
  return async dispatch => {
    try {
      let response = await axios.get(`/api/subscriptions/client/${userId}`)
      let subscriptions = response.data;
      dispatch({type: 'GETS_USER_SUBSCRIPTIONS', payload: subscriptions})
    } catch(err) { alert(err) }
  }
}

export const getSubsByTeacher = teacherId => {
  return async dispatch => {
    try {
      let response = await axios.get(`/api/subscriptions/teacher/${teacherId}`);
      console.log('GET SUBS BY TEACHER', response);
      let subs = response.data;
      dispatch({type:'GETS_TEACHER_SUBS', payload: subs})
    } catch (err) {alert(err)}
  }
}

export const editSubByTeacher = updatedSub => {
  return async dispatch => {
    try {
      let response = await axios.put(`/api/subscriptions/edit/${updatedSub.subscriptionId}/?edit=true`, updatedSub)
      console.log(response)
      dispatch({type: 'SUBS_UPDATED'})
    } catch(err) {alert(err)}
  }
}

export const deleteSub = subId => {
  return async dispatch => {
    try {
      let response = await axios.delete(`/api/subscriptions/deactivate/${subId}`);
      console.log(response);
      dispatch({type: 'DATABASE_UPDATED'})
    } catch(err) {alert(err)}
  }
}

export const teacherCredentials = teacher => {
  return async dispatch => {
    try {
      let response = await axios.post('/api/teachers/auth/login', teacher);
      let teacherId = response.data.id;
      dispatch(getTeacherInfo(teacherId))
      dispatch(teacherLogin(teacherId))
      dispatch(getTeacherInstruments(teacherId))
      dispatch(getZipCodesByTeacher(teacherId))
      dispatch(getTeacherWeek(teacherId))
    }
    catch(err) {
      alert(err)
    }
  }
}

export const createTeacherWeek = reqBody => {
  return async dispatch => {
    try {
      let response = await axios.post('/api/teachers/week', reqBody);
    let data = response.data;
    dispatch({type: 'DATABASE_UPDATED'})
    }
    catch(err) {
      alert(err)
    }
  }
}

export const getTeacherInfo = teacherId => {
  return async dispatch => {
    try {
      let response = await axios.get(`/api/teachers/${teacherId}`)
      let info = response.data[0];
      dispatch({type:'GETS_TEACHER_INFO', payload:info})
    }
    catch(err) {alert(err)}
  }
}

export const getTeacherWeek = teacherId => {
  return async dispatch => {
    try {
      let response = await axios.get(`/api/teachers/${teacherId}/week`);
      let week = response.data;
      let orderedWeek = week.sort((a,b) => a.day_id - b.day_id);
      dispatch({type: 'GETS_TEACHER_WEEK', payload: orderedWeek})
    }
    catch(err) {alert(err)}
  }
}

export const deleteTeacherWeek = weekId => {
  return async dispatch => {
    try{
      let response = await axios.delete(`/api/teachers/week/${weekId}`)
      console.log(response)
      dispatch({type:'DATABASE_UPDATED'});
    } catch(err) {alert(err)}
  }
}

export const getTeacherInstruments = teacherId => {
  return async dispatch => {
    try {
      let response = await axios.get(`/api/teachers/${teacherId}/instruments`)
      console.log('RESPONSE', response)
      let instruments = response.data
      dispatch({type:'GETS_TEACHER_INSTRUMENTS', payload:instruments});
    }
    catch (err) {
      alert(err)
    }
  }
}

export const addTeacherZipCode = zipCode => {
  return async dispatch => {
    try {
      let response = await axios.post('/api/teachers/zip-code', zipCode)
      console.log(response);
      dispatch({type: 'DATABASE_UPDATED'})
    }
    catch (err) {alert(err)}
  }
}

export const getZipCodesByTeacher = teacherId => {
  return async dispatch => {
    try {
      let response = await axios.get(`/api/teachers/${teacherId}/zip-codes`);
      let zipCodes = response.data;
      dispatch({type:'GETS_TEACHER_ZIPCODES', payload:zipCodes});
    }
    catch(err) {alert(err)}
  }
}

export const deleteZipCode = zipCodeId => {
  return async dispatch => {
    try {
      let response = await axios.delete(`/api/teachers/zip-code/${zipCodeId}`)
      console.log(response)
      dispatch({type:'DATABASE_UPDATED'})
    }
    catch (err) {alert(err)}
  }
}

export const editMaxDrive = maxDrive => {
  return async dispatch => {
    try{
      let response = await axios.put('/api/teachers/max-drive', maxDrive);
      console.log(response);
      dispatch({type: 'DATABASE_UPDATED'})
    }
    catch(err) {alert(err)}
  }
}

export const addInstrument = (teacherId, instrument) => {
  return async dispatch => {
    try {
      let response = await axios.post(`/api/teachers/instrument/add/${teacherId}`, instrument)
      let result = response.data;
      console.log(result)
      dispatch({type:'DATABASE_UPDATED'})
    } catch (err) {alert(err)}
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

export const createSubscription = (avail) => {
  return async dispatch => {
    try {
      let response = await axios.post('/api/subscriptions', avail)
      console.log('AVAIL: ', avail);
      console.log(response.data);
      dispatch({type:'DATABASE_UPDATED'})
    }
    catch(err) { alert(err) }
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
    axios.post('/api/requests/new', request)
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
      console.log('REQUEST: ', {...request, studentId});
      let postRequest = await axios.post('/api/requests/new', {...request, studentId})
      // console.log('REQUEST:', postRequest)
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

export const teacherLogin = (teacherId) => {
  return {type:'TEACHER_LOGS_IN', payload:teacherId}
}

export const getUserLessons = (userId) => {
  const date = moment().format('YYYY-MM-DD');
  return async dispatch => {
    try {
      let response = await axios.get(`/api/lessons/user/${userId}?date=${date}`)
      let lessons = response.data
      dispatch({type:'GETS_USER_LESSONS', payload: lessons})
    } 
    catch (err) { alert(err) }
  }
}

export const getLessonsByTeacher = (teacherId) => {
  return async dispatch => {
    try {
      let response = await axios.get(`/api/lessons/teacher/${teacherId}`);
      console.log(response);
      let lessons = response.data;
      dispatch({type: 'GETS_TEACHER_LESSONS', payload: lessons});
    } catch (err) { alert(err) }
  }
} 

export const userLogsOut = () => {
  return {type:'USER_LOGS_OUT'}
}

export const teacherLogsOut =() => {
  return {type:'TEACHER_LOGS_OUT'}
}

export const deleteTeacherInstrument = (teacherInstrumentId) => {
  return async dispatch => {
    try {
      let response = await axios.delete(`/api/teachers/instrument/delete/${teacherInstrumentId}`)
      console.log(response);
      dispatch({type:'DATABASE_UPDATED'})
    } catch(err) {alert(err)}
  }
}