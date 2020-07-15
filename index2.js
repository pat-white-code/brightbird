const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000
const path = require('path');

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('/', (req, res) => {
//     res.send('Welcome to our express app')
// })

app.get('/test', (req, res)=> {
    res.send('SERVER HIT! BAZINGA!')
})

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})