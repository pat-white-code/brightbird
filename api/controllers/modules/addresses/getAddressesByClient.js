const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const getAddressesByClient = (req, res) => {
  let sql = `
    SELECT * FROM addresses
    WHERE client_id = ?`
  let replacements = [req.params.clientId];
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows)=>{
    if(err) {return res.status(500).send(err)}
    return res.status(200).json(rows)
  })
}

module.exports = getAddressesByClient;