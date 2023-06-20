const Tesseract = require('tesseract.js')
const path = require('path')


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
        Tesseract.recognize(
            path.resolve(__dirname, `../uploads/${this.file.image.filename}`),
            this.file.language,
            {
                logger: m => console.log(m),
            }
        ).then(({ data: { text } }) => {
            res.send({ text: text, path: path.resolve(__dirname, `../uploads/${this.file.image.filename}`)})
        }).catch(err => {
            console.log(err);
        })
    }
}

module.exports = extract