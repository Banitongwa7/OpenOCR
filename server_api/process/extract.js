const tesseract = require('tesseract.js');

module.exports = function(req, res) {
    const file = req.body.file;
    const language = req.body.language;
    tesseract.recognize(file, language)
        .then(result => {
            res.send(result.data);
            console.log(result.data);
            fs.unlinkSync(file);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })
}