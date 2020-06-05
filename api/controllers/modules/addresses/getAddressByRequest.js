// THIS ROUTE RETURNS ADDRESS INFORMATION GIVEN A REQUEST ID
const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const getAddressByRequest = (req, res) => {
  let sql = `
    SELECT 
      addresses.address, 
      addresses.zip_code, 
      addresses.street_no, 
      addresses.street, 
      addresses.city, 
      addresses.state 
    FROM service_requests
    JOIN addresses ON 
      service_requests.address_id = addresses.id
    WHERE service_requests.id = ?;
  `
  let replacements = [req.params.requestId];
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows)=>{
    if(err){return res.status(500).send(err)}
    return res.status(200).json(rows)
  });
}

module.exports = getAddressByRequest;