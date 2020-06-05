const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const deleteRequest = (req, res) => {
  let sql = `
    UPDATE service_requests
    SET is_active = 0
    WHERE id = ?;
    `;
  let replacements = [req.params.requestId]
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, results)=>{
    if(err) {return res.status(500).send(err)}
    return res.status(200).send('is_active set to false')
  })
}

module.exports = deleteRequest;