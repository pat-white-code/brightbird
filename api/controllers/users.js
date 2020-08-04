const createUser = require('./modules/users/createUser');
const loginUser = require('./modules/users/loginUser');
const emailNewUser = require('./modules/users/emailNewUser');

module.exports = {
  createUser,
  loginUser,
  emailNewUser
}