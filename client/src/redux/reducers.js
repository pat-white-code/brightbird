import { combineReducers } from 'redux';
import state from './state';
// import state from './state';

const user = (state = {}, action) => {
  switch(action.type) {
    case 'USER_LOGS_IN':
      return {...state, isLoggedIn: true};
    case 'USER_LOGS_OUT':
        return {...state,
          isLoggedIn: false,
          id: null,
          addressId: null,
          students: [],
          addresses: [],
          lessons: [],
          subscriptions: []
        };
    case 'INITIAL_LOGIN':
      return{...state, isLoggedIn: true, id:action.payload};
    case 'SETS_USER_ID':
      return {...state, id:action.payload};
    case 'INITIAL_ADDRESS':
      return{...state, addressId: action.payload};
    case 'GETS_USER_STUDENTS':
      return {...state, students: action.payload};
    case 'GETS_USER_ADDRESSES':
      return {...state, addresses: action.payload};
    case 'GETS_USER_LESSONS':
      return {...state, lessons: action.payload};
    case 'GETS_USER_SUBSCRIPTIONS':
      return {...state, subscriptions: action.payload};
    default: return state;
  }
}

const requests = (state =[], action) => {
  switch(action.type) {
    case 'GETS_REQUESTS_WITH_AVAIL':
      return action.payload;
    default: return state;
  }
}

const dbUpdatedAt = (state = null, action) => {
  const newState = {...state};
  switch(action.type) {
    case 'DATABASE_UPDATED':
      return newState.dbUpdatedAt = new Date();
    default: return state;
  }
}

const availabilities = (state = [], action) => {
  switch(action.type) {
    case 'GETS_AVAILABILITIES':
      return action.payload;
    default: return state;
  }
}

const teacher = (state = {}, action) => {
  switch(action.type) {
    case 'TEACHER_LOGS_IN':
      return {...state, isLoggedIn: true, id: action.payload}
    case 'TEACHER_LOGS_OUT':
      return {...state, 
        isLoggedIn: false,
        id: null,
        zipCodes: [],
        info: null,
        week: []
      }
    case 'GETS_TEACHER_INSTRUMENTS':
      return {...state, instruments:action.payload}
    case 'GETS_TEACHER_ZIPCODES':
      return {...state, zipCodes: action.payload}
    case 'GETS_TEACHER_INFO':
      return {...state, info: action.payload}
    case 'GETS_TEACHER_WEEK':
      return {...state, week: action.payload};
    case 'GETS_TEACHER_SUBS':
      return {...state, subs: action.payload}
    default: return state
  }
}

const isLoading = (state = false, action) => {
  let newState = {...state}
  switch(action.type) {
    case 'LOADING_DATA':
      newState = true
      return newState;
    case 'DATA_SUCCESS':
      newState = false
      return newState;
    default:
      return state;
  }
}

export default combineReducers({
  isLoading,
  user, 
  requests, 
  // teacherSchedules, 
  // requestIsLoaded,
  availabilities,
  dbUpdatedAt,
  teacher
})