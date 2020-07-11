const mysql = require('mysql');
const pool = require('../../../mysql/connection');
const moment = require('moment');

const deleteSub = (req, res, next) => {
  let date = moment().format('YYYY-MM-DD');
  const { subId } = req.params;

  let sql = `
    UPDATE subscriptions
    SET active = FALSE,
    end_date = ?
    WHERE id = ?;
  `

  let replacements = [date, subId];

  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, rows)=>{
    if(err){ return res.status(500).send(err) }
    next();
    // res.status(200).send(`Subscription ${subId} deactivated as of ${date}`);
  })
}

module.exports = deleteSub;