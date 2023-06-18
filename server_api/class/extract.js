const tesseract = require('tesseract.js');

class Extract {
    constructor(file) {
        this.file = file
    }

    valideExtension() {
        let extension = file.getExtension()
        if (extension != 'png' && extension != 'jpg' && extension != 'jpeg') {
            return false
        }
        return true
    }

    getText() {
        let text = tesseract.recognize(this.file.image, this.file.language, {
            logger: (m) => console.log(m)
        }).then((result) => {
            return result.text
        })
        return text
    }
}