const axios = require('axios')
var throttle = require('lodash.throttle');

const refreshAvailabilities = async (req, res, next) => {
  // let delay = 0;
  console.log('REQ BODY', req.body);
  const {requests} = req.body;
  // const sendRequest = (payload) => {
  //   axios.post('/api/requests/refresh', payload)
  //     .then(() => console.log('success'))
  //     .catch(err => console.log(err));
  // }
  let responses = await Promise.all(requests.map(async request => {
    try { 
      let payload = { 
      requestId: request.id,
      studentId: request.student_id,
      lessonDuration: request.lesson_duration,
      experience: request.experience,
      addressId: request.address_id,
      studentAge: request.student_age,
      instrumentId: request.instrument_id
    }
      let response = await axios.post('http://localhost:3000/api/requests/refresh', payload);
      return response.data;
  } catch (err) { console.log(err) }
  }));

  return res.json(responses);
}

module.exports = refreshAvailabilities;
