// Get all active requests
const pool = require('../../../mysql/connection');

const getAllRequests = (req, res, next) => {
  let sql = `
    select * from service_requests
    WHERE is_active = 1;
  `;

  pool.query(sql, (err, rows)=> {
    if(err) { return res.status(500).send(err) }
    // return res.json(rows);
    req.body.requests = rows;
    next();
  })
}

module.exports = getAllRequests;
