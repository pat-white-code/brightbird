const mysql = require('mysql');
const pool = require('../../../mysql/connection');
const moment = require('moment');

const endSubscription = (req, res, next) => {
  let twoWeeks = moment().add(2, 'weeks');
  let dateText = twoWeeks.format('LL');
  let dateSql = twoWeeks.format('YYYY-MM-DD');

  console.log(dateText);
  console.log(dateSql);

  let sql = `
    UPDATE subscriptions
    SET active = 0,
    end_date = ?
    WHERE id = ?;
  `

  let replacements = [dateSql, req.params.subscriptionId];

  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, rows)=>{
    if(err){
      console.log(err)
      return res.status(500).send(err)}
    req.body.endDate = dateSql;
    next();
    // res.status(200).send(`Subscription ${req.params.subscriptionId} deactivated as of ${dateText}`);
  })
}

module.exports = endSubscription;