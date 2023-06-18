const express = require('express')
const cors = require('cors')
const app = express()
const port = 3500
const file = require('./class/file')

app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send({ 
        message: 'Server is running',
        port: port,
        statut: 200
     })
})

app.post('/upload', (req, res) => {
    const { title, image, language } = req.body
    const file = new file(title, image, language)
    //const extract = new Extract(file)
    console.log("*************************************************")
    console.log(file.title)
    console.log(file.image)
    console.log(file.language)
    console.log("*************************************************")
    /*
    if (extract.valideExtension()) {
        const text = extract.getText()
        console.log()
    }else{
        res.send({ statut: 400 })
    }
    */
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})