const express = require('express')
const cors = require('cors')
const multer = require('multer')
const app = express()
const port = 3500
const filedata = require('./class/filedata')
const extract = require('./class/extract')

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
))

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
    
    if (process.valideExtension()) {
        process.getText(res)
    }else{
        res.status(400).send("Fichier invalide")
    }
})

app.use('/api/file', require('./routes/file.route'))


app.listen(port, () => {
    console.log(`OpenOCR server listening on port ${port}`)
})