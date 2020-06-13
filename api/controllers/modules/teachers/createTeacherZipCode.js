let mysql = require('mysql');
let pool = require('../../../mysql/connection');

const createTeacherZipCode = (req, res) => {
  const {teacherId, zipCode} = req.body;

  let sql = `
    INSERT INTO zip_codes (
      teacher_id, zip_code
    )

    VALUES (
      ?, ?
    );`
  
  let replacements = [teacherId, zipCode];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, results)=>{
    if (err) {return res.status(500).send(err)}
    return res.send(`ZipCode created. id: ${results.insertId}`)
  })
}

module.exports = createTeacherZipCode;