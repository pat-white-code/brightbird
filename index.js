const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const port = process.env.port || 8080;

const teachersRouter = require('./api/routes/teachers');
const schedulesRouter = require('./api/routes/schedules');
const studentsRouter = require('./api/routes/students');
const subscriptionsRouter = require('./api/routes/subsciptions');
const driveTimesRouter = require('./api/routes/driveTimes');
const requestsRouter = require('./api/routes/requests');
const lessonsRouter = require('./api/routes/lessons');
const usersRouter = require('./api/routes/users');
const addressesRouter = require('./api/routes/addresses');
const availabilitiesRouter = require('./api/routes/availabilities');

app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}))

app.get('/test', (req,res)=>{
  res.send('server hit')
})

app.use('/api/teachers', teachersRouter);
app.use('/api/schedules', schedulesRouter);
app.use('/api/students', studentsRouter);
app.use('/api/subscriptions', subscriptionsRouter);
app.use('/api/driveTimes', driveTimesRouter);
app.use('/api/requests', requestsRouter);
app.use('/api/lessons', lessonsRouter);
app.use('/api/users', usersRouter);
app.use('/api/addresses', addressesRouter);
app.use('/api/availabilities', availabilitiesRouter);


app.listen(port, ()=> {
  console.log(`Listening on ${port}!`)
});