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

    getText() {
        Tesseract.recognize(
            path.resolve(__dirname, `../uploads/${this.file.image.filename}`),
            'fra',
            {
                logger: m => console.log(m),
            }
        ).then(({ data: { text } }) => {
            console.log(text);
        }).catch(err => {
            console.log(err);
        })
    }
}

module.exports = extract