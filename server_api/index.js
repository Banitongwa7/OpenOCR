const express = require('express')
const cors = require('cors')
const app = express()
const port = 3500

app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send({ message: 'Hello World' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})