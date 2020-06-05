const mysql = require('mysql');
const pool = require('../../../mysql/connection');
const { handleSQLError } = require('../../../sql/error');

const createAddress = (req, res) => {
  const { address, addressLineTwo, city, geoState, zipCode } = req.body
  let streetNo = address.match(/\d+/g, '')[0]
  let street = address.replace(/\d+/g, '')

  let sql = `
    INSERT INTO addresses (
      address, line_2, city, state, zip_code, client_id, street_no, street
    )
    VALUES
      (?, ?, ?, ?, ?, ?, ?, ?)`
  let replacements = [address, addressLineTwo, city, geoState, zipCode, req.params.userId, streetNo, street];

  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, results)=> {
    if(err) {
      return handleSQLError(res, err)
    }
    return res.json({message: 'Address Created.', id: results.insertId})
  })
}

module.exports = createAddress;