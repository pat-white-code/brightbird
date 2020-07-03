// const fetch = require('node-fetch');
const axios = require('axios')
require('dotenv').config();

const getSchedulesByRequest = (req, res, next) => {
  // req.body: {requestId: 1}
  const {requestId, instrumentId, studentAge, experience} = req.body;
  const getSchedules = async () => {
    // instrumentId, studentAge
    let zipRes = await axios.get(`http://${process.env.IP}/api/addresses/request/${requestId}`);
    let zipCode = zipRes.data[0].zip_code;
    console.log('ZIP CODE:    ', zipCode);
    console.log('studentAge', studentAge);
    console.log('INSTRUMENT ID', instrumentId);
    console.log('experience', experience);
    let response = await axios.get(`http://localhost:3000/api/schedules/request-parameters/?instrumentId=${instrumentId}&zipCode=${zipCode}&studentAge=${studentAge}&exp=${experience}`);
    return response;
  }

  getSchedules()
    .then(response =>{
      console.log('RES', response)
      req.body.lessonData = response.data;
      console.log('REQUEST BODY Lesson Data', req.body.lessonData)
      // next();
      res.status(200).send("Data Found")
    })
    .catch(console.error);
}

module.exports = getSchedulesByRequest;