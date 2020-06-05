import { combineReducers } from 'redux';
// import state from './state';

const user = (state = {}, action) => {
  switch(action.type) {
    case 'USER_LOGS_IN':
      return {...state, isLoggedIn: true};
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

// const teacherSchedules = (state = [], action) => {
//   switch(action.type) {
//     case 'FETCHES_TEACHER_SCHEDULES':
//       return action.payload;
//     default: return state
//   }
// }

// const requestIsLoaded = (state = false, action) => {
//   let newState = {...state}
//   switch(action.type) {
//     case 'FETCH_SUCCESSFUL':
//       return newState.requestIsLoaded = true
//     default: return state;
//   }
// }

const availabilities = (state = [], action) => {
  switch(action.type) {
    case 'GETS_AVAILABILITIES':
      return action.payload;
    default: return state;
  }
}

export default combineReducers({
  user, 
  requests, 
  // teacherSchedules, 
  // requestIsLoaded,
  availabilities,
  dbUpdatedAt
})