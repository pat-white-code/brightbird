const axios = require('axios')
require('dotenv').config();

const refreshAvailabilities = async (req, res, next) => {

  console.log('REQ BODY', req.body);
  const {requests} = req.body;

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
      let response = await axios.post(`http://${process.env.IP}/api/requests/refresh`, payload);
      return response.data;
  } catch (err) { console.log(err) }
  }));

  return res.json(responses);
}

module.exports = refreshAvailabilities;
