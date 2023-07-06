const express = require("express");
const router = express.Router();
const multer = require("multer");
const { setFile } = require("../controllers/file.controllers");

// Configurer Multer pour gérer les fichiers reçus
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
});

router.get("/", (req, res) => {
  res.send({
    message: "File route are working",
  });
});

router.post("/upload", upload.single("image"), setFile);

module.exports = router;
