
const express = require('express')
const app = express()
const routes = require('./routes.js')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 8080

var message = require('./message').message(PORT)

app.use(bodyParser.json())
app.use('/', routes)
app.use((req, res) => {
  res.send(message)
})
app.use(express.static("public"))

app.listen(PORT, function () {
  console.log('Server listening on port: ' + PORT)
})
