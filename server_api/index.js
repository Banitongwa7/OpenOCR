const express = require('express')
const cors = require('cors')
const multer = require('multer')
const app = express()
const port = 3500
const filedata = require('./class/filedata')
const extract = require('./class/extract')

app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configurer Multer pour gérer les fichiers reçus
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage
})

app.get('/', (req, res) => {
    res.send({ 
        message: 'Server is running',
        port: port,
        statut: 200
     })
})

app.post('/upload', upload.single('image'), (req, res) => {
    const title = req.body.title
    const imageFile = req.file
    const language = req.body.language
    
    // class filedata
    const file = new filedata(title, imageFile, language)
    const process = new extract(file)


    console.log("*****************")
    console.log(imageFile)
    process.getText()
    console.log("*****************")
    /*
    if (extract.valideExtension()) {
        const text = extract.getText()
        console.log()
    }else{
        res.send({ statut: 400 })
    }
    */

    res.send({ statut: 200 })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})