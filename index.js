
const express = require('express')
const app = express()
const port = 2800

app.get('/', (req, res) => {
  res.send('Hello World!!')
})

app.listen(port, () => {
  console.log(`Example1 app listening on port ${port}!`)
})
