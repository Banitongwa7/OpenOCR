const Tesseract = require('tesseract.js')
const path = require('path')
const fs = require('fs')
const { createWorker } = require('tesseract.js')


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

    async getText() {
        var process = ""

        try{
            const worker = await createWorker({
                logger: m => console.log(m)
            });
            await worker.loadLanguage('eng');
            await worker.initialize('eng');
            const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
            process += text
            await worker.terminate();
            return process
        }catch(err){
            console.log(err)
        }


        // let pathImage = path.resolve(__dirname, `../uploads/${this.file.image.filename}`)

        // fs.readFile(pathImage, (err, data) => {
        //     if (err) {
        //         console.log(err)
        //         res.json({ statut: 400 })
        //         return
        //     }

        //     Tesseract.recognize(
        //         pathImage,
        //         this.file.language,
        //         {
        //             logger: m => fs.writeFileSync(path.resolve(__dirname, `../logs/${this.file.image.filename}.log`), JSON.stringify(m), { flag: 'a' }),
        //         }
        //     ).then(({ data: { text } }) => {
        //         return { text: text, image: `data:image/png;base64,${data.toString('base64')}` }
        //     }).catch(err => {
        //         console.log(err)
        //     })
        // })

    }
}

module.exports = extract