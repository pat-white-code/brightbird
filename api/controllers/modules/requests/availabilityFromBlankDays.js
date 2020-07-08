// This method creates availabilities based on blank days in the request body
const moment = require('moment');

const availabilityFromBlankDays = (req, res, next) => {
  // let time = start_time.moment.clone()
  // While time.clone().add(req.lessonDuration, 'minutes').valueOf() < end_time.valueOf()
  // push to availabilites
  req.body.availabilities = []
  const { blankDays, lessonDuration, availabilities } = req.body
  blankDays.forEach(day => {
    day.startMoment = moment(day.start_time)
    day.endMoment = moment(day.end_time)
    let timeTicker = day.startMoment.clone();
    while(timeTicker.clone().add(lessonDuration, 'minutes').valueOf() < day.endMoment.valueOf()) {
      let availability = {
        teacherId: day.teacher_id,
        startTime: timeTicker.format('YYYY-MM-DD HH:mm:ss'),
        requestId: req.body.requestId
      }
      availabilities.push(availability)
      timeTicker.add(30, 'minutes');
    }
  })
  console.log('AVAILABILITIES', req.body.availabilities);
  res.status(200).send('availabilities derived from blank days');
}

module.exports = availabilityFromBlankDays;