const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/transaction', (req, res) => res.send('This is transaction API'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))