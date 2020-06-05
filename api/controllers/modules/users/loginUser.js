const mysql = require('mysql');
const pool = require('../../../mysql/connection')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { handleSQLError } = require('../../../sql/error');


const loginUser = (req, res) => {
  const { email, password } = req.body;

  let sql = "SELECT * FROM clients WHERE email = ?"
  sql = mysql.format(sql, [ email ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    if (!rows.length) return res.status(404).send('No matching users')

    const hash = rows[0].password
    bcrypt.compare(password, hash)
      .then(result => {
        if (!result) return res.status(400).send('Invalid password')

        const data = { ...rows[0] }
        data.password = 'REDACTED'

        const token = jwt.sign(data, 'secret')
        res.json({
          msg: 'Login successful',
          token,
          id: data.id
        })
      })
  })
}

module.exports = loginUser;