const filedata = require("./../class/filedata");
const extract = require("./../class/extract");

module.exports.setFile = (req, res) => {
    const title = req.body.title;
    const imageFile = req.file;
    const language = req.body.language;
  
    // class filedata
    const file = new filedata(title, imageFile, language);
    const process = new extract(file);
  
    if (process.valideExtension()) {
      process.getText().then((resp) => {
        res.status(200).send({text: resp, image: "https://tesseract.projectnaptha.com/img/eng_bw.png"});
      }).catch((err) => {
        res.status(400).send(err);
      })
    } else {
      res.status(400).send("Fichier invalide");
    }
}