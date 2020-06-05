const createAddress = require('./modules/addresses/createAddress');
const getAddressByRequest = require('./modules/addresses/getAddressByRequest');
const getAddressesByClient = require('./modules/addresses/getAddressesByClient');

module.exports = {
  createAddress,
  getAddressByRequest,
  getAddressesByClient
}