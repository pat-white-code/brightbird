const mysql = require('mysql');
require('dotenv').config();

class Connection {
  constructor(){
  if(!this.pool) {
    console.log('creating conneciton...')
    this.pool = mysql.createPool({
      connectionLimit: 100,
      host: '35.222.166.74',
      user: 'root',
      password: process.env.CONNECTION_PASSWORD,
      database: 'admin'
      })
    return this.pool;
    }
  return this.pool
  } 
}

const instance = new Connection()

module.exports = instance;