const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const db = require('./MongoClient')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', (req, res) => {
    res.json({msg : "Aceptado"})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  db.collection('eventos').find().toArray().then((res) => {
    console.log(res);
  });
  
})