var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var AYLIENTextAPI = require('aylien_textapi')
const app = express()
const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Aylien API credentials
var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
})

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Listening on port 8080!')
})

// get data from AYLIEN API
function getAPIData (url, callback) {
    textapi.sentiment({ 'url': url }, callback)
}

// post route to receive url and respond with the evaluation
app.post('/sentiment', sendData)

function sendData (request, response) {
    const link = request.body.link
    // evaluate received url
    getAPIData(link, (error, res) => {
        // send the results of the evaluation
        response.send(res)
        })
}
