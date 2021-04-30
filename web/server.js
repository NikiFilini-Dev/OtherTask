const express = require("express")
const path = require("path")
require("dotenv").config()
const app = express()
const port = process.env.PORT || 3000

app.use("/static", express.static("./web_dist"))
app.use("/public", express.static("./web/public"))

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./web/index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
