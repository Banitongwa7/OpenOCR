const Tesseract = require('tesseract.js')
const path = require('path')
const fs = require('fs')


class extract {
    constructor(file) {
        this.file = file
    }

    valideExtension() {
        let extension = this.file.getExtension()
        if (extension != 'png' && extension != 'jpg' && extension != 'jpeg') {
            return false
        }
        return true
    }

    getText(res) {
        let pathImage = path.resolve(__dirname, `../uploads/${this.file.image.filename}`)

        fs.readFile(pathImage, (err, data) => {
            if (err) {
                console.log(err)
                res.json({ statut: 400 })
                return
            }

            Tesseract.recognize(
                pathImage,
                this.file.language,
                {
                    logger: m => console.log(m)
                }
            ).then(({ data: { text } }) => {
                res.json({ text: text, image: `data:image/png;base64,${data.toString('base64')}` })
            }).catch(err => {
                res.json({ statut: 400 })
            })
        })

    }
}

module.exports = extract