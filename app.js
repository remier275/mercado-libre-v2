const express = require("express")
const path = require("path")

const app = express()

const publicPath = path.resolve(__dirname, "./public")

app.use(express.static("public"))

app.listen(5000, () => {
    console.log('servidor abierto')
})

app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})