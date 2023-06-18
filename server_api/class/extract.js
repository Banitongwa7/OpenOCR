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

        /*
        const worker = createWorker().then(worker => {
            worker.loadLanguage('fra')
            worker.initialize('fra')
            worker.recognize(this.file.image)
            return worker
        })

        return new Promise((resolve, reject) => {
            worker.then(worker => {
                worker.getUTF8Text().then(text => {
                    console.log(text)
                    resolve(text)
                })
            })
            worker.catch(err => {
                reject(err)
            })

        })
        */
    }
}

module.exports = extract