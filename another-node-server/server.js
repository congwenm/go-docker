const express = require('express')

const PORT = 8080

const app = express()

app.get('/', (req, res) => {
  res.send('Hello world\n')
})

app.listen(PORT)
console.log('running on localhost' + PORT)
