const fetch = require('node-fetch');
const mysql = require('mysql');
const pool = require('../mysql/connection');
let fetchDelay = 0;

let streets = ['Bay Hill Dr, Austin, TX 78746', 'Doswell Ln, Austin, TX 78739', 'Dogwood creek Drive, Austin, TX 78746'];

for(let i = 1; i < streets.length; i++) {
  for(let j = 0 ; j < i ; j ++) {
    fetchDelay = fetchDelay + 500;
    let street1 = streets[i];
    let street2 = streets[j];

    let origin = street1.replace(/ /g, "+");
    let destination = street2.replace(/ /g, "+");

    setTimeout(()=> {}, fetchDelay)
    fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin}&destinations=${destination}&traffic_mode1=pessimistic&key=AIzaSyAzq7W-eXQNz0ptPkQqWi9LBluABETr7Zs`)
      .then(res => res.json())
      .then(json => json.rows[0].elements[0].duration.value)
      .then(driveTime => {
        let sql = `
        INSERT INTO drive_times (
          address_1, address_2, drive_time_seconds
        )
        VALUES
          (?, ?, ?),
          (?, ?, ?);
        `;
        let replacements = [origin, destination, driveTime, destination, origin, driveTime];

        sql = mysql.format(sql, replacements);

        pool.query(sql, (err, rows) => {
          if(err) {
            console.log(err);
          }
          console.log('drive time inserted successfully');
        })
      })
  }
}


// let address1 = 'S 1st St Austin, TX 78704';
// let street1 = address1.replace(/\d+ /, "");
// let formattedStreet1 = street1.replace(/ /g, "+");

// let address2 = 'Brazos St Austin, TX 78701';
// let street2 = address2.replace(/\d+ /, "");
// let formattedStreet2 = street2.replace(/ /g, "+");


// fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${formattedStreet1}&destinations=${formattedStreet2}&traffic_mode1=pessimistic&key=AIzaSyAzq7W-eXQNz0ptPkQqWi9LBluABETr7Zs`)
//   .then(res => res.json())
//   .then(json => json.rows[0].elements[0].duration.value)
//   .then(driveTime => {
//     let sql = `
//     INSERT INTO drive_times (
//       address_1, address_2, drive_time_seconds
//     )
//     VALUES
//       (?, ?, ?),
//       (?, ?, ?);
//     `;
//     let replacements = [street1, street2, driveTime, street2, street1, driveTime];

//     sql = mysql.format(sql, replacements);

//     pool.query(sql, (err, rows) => {
//       if(err) {
//         console.log(err);
//       }
//       console.log('drive time inserted successfully');
//     })
//   })