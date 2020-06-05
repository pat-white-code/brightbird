const mysql = require('mysql');
const pool = require('../../../mysql/connection');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken')
const { handleSQLError } = require('../../../sql/error');

const saltRounds = 10

const createUser = (req, res) => {
  const { firstName, lastName, email, password } = req.body
  let sql = "INSERT INTO clients (first_name, last_name, email, password) VALUES (?, ?, ?, ?)"

  bcrypt.hash(password, saltRounds, function(err, hash) {
    let replacements = [firstName, lastName, email, hash]
    sql = mysql.format(sql, replacements)
  
    pool.query(sql, (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') return res.status(409).send('Email Address is taken')
        return handleSQLError(res, err)
      }
      return res.json({message: 'User Created.', id: result.insertId})
    })
  })
}

module.exports = createUser;