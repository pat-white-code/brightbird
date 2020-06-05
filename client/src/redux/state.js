const state = {
  user: {
    email: null,
    id: null,
    isLoggedIn: false,
    addressId: null,
    students: [],
    addresses: []
  },
  requests: [],
  // requestIsLoaded: false,
  availabilities: [],
  dbUpdatedAt: null
}

// const data = [
//   {
//     requestId: 1,
//     lessonTime: 30,
//     address: 'xyz',
//     instrument: 'guitar',
//     teacherId: 2,
//     teacherName: 'anne-marie',
//     appointment: 'abc',
//     date: '4-20-2020',
//     time: '3:00 PM',
//     cutoff: '8:00 PM'
//   },
//   {
//     requestId: 1,
//     lessonTime: 30,
//     requestAddress: 'xyz',
//     instrument: 'guitar',
//     teacherId: 2,
//     teacherName: 'anne-marie',
//     appointment: 'abc',
//     date: '4-20-2020',
//     time: '3:45 PM',
//     cutoff: '8:00 PM'
//   },

// ]

export default state;