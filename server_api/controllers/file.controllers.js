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
      process.getText().then(resp => {
        res.json(resp)
      }).catch(err => {
        res.json({ statut: 400 })
      })
    } else {
      res.status(400).send("Fichier invalide");
    }
}