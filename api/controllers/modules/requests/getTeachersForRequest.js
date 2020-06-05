const axios = require('axios');
require('dotenv').config()

const getTeachersForRequest = (req, res, next) => {
  const {requestId, instrumentId, studentAge} = req.body;
  const getTeachers = async () => {
    let zipRes = await axios.get(`http://${process.env.IP}/api/addresses/request/${requestId}`);
    let zipCode = zipRes.data[0].zip_code;
    let response = await axios.get(`http://${process.env.IP}/api/teachers/?instId=${instrumentId}&zipCode=${zipCode}&studentAge=${studentAge}`);
    return response
  }


  getTeachers()
    .then(response => {
      // console.log(response.data)
      req.body.availableTeachers = response.data
      console.log(req.body);
      // res.status(200).send('teachers found');
      next();
    })
}

module.exports = getTeachersForRequest;