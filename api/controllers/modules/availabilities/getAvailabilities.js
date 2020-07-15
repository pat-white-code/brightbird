// This route will take a client ID and returned a tiered object response
// let response = {
//   requestId: 1,
//   availableTeachers: [
//     {
//       name: 'Anne-Marie',
//       availabilities: [
//         {
//           date: '2020'
//         }
//       ]
//   },
//     {
//       name: 'Jim'
//     }
//   ]
// }
require('dotenv').config();
const axios = require('axios');

const getAvailabilities = async (req, res) => {
  const clientId = req.params.clientId;

  const getRequests = async () => {
    let response = await axios.get(`http://${process.env.IP}/api/requests/client/${clientId}`)
    console.log('GET REQUESTS RESPONSE: ', response.data)
    let requests = response.data;
    return requests;
  } 

  const getTeachers = async (requests) => {
    let reqWithTeachers = await Promise.all(requests.map(async request => {
      let response = await axios.get(`http://${process.env.IP}/api/requests/teachers/${request.id}`)
      console.log('GET TEACHERS RESPONSE: ', response.data)
      // console.log(response.data)
      request.availableTeachers = response.data;
      let teachersWithAvailabilities = await Promise.all(response.data.map(async teacher => {
        let response = await axios.get(`http://${process.env.IP}/api/availabilities/request/${request.id}/teacher/${teacher.teacher_id}`);
        // console.log(request.id)
        teacher.availabilities = response.data
        return teacher;
      }))
      request.availableTeachers = teachersWithAvailabilities
      console.log('REQUEST WITH TEACHER?', request);
      return request
    }));
    return reqWithTeachers;
  }

  // const getAvailabilities = async (reqWithTeachers) => {
  //   let availabilities = await Promise.all(reqWithTeachers.map(async teacher => {
  //     let response = await axios.get(`PUT NEW ROUTE HERE`)
  //     let availability = response.data
  //   }))
  // }
  // getRequests() 
  //   .then(requests => {
  //     console.log('REQUESTS', requests)
  //     getTeachers(requests)})
  //   .then(reqWithTeachers => {
  //     console.log('REQUESTS W TEACHERS', reqWithTeachers)
  //     req.body.requests = reqWithTeachers
  //     res.status(200).json(reqWithTeachers)
  //   })

  let requests = await getRequests();
  let requestsWithTeachers = await getTeachers(requests);
  console.log(requestsWithTeachers)
  res.status(200).json(requestsWithTeachers);
  
}

module.exports = getAvailabilities;