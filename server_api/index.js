const express = require("express");
const cors = require("cors");
const app = express();
const port = 3500;

// Cors
app.use(cors({origin: "http://localhost:3000",credentials: true,}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API
app.get("/", (req, res) => {res.send({message: "Server is running",});});
app.use("/upload", require("./routes/file.routes"));

app.listen(port, () => {
  console.log(`OpenOCR server listening on port ${port}`);
});
