// The purpose of this project is to learn advanced GitHub practices, such as branching and merging branches


const express = require('express')
const app = express()
// Simple Hello World Node App
const APP_PORT = process.env.APP_PORT || 3000; app.get('/', (req, res) => {
    res.send('Hello to Chris and the rest of the world out there!')
}); app.listen(APP_PORT, () => {
    console.log(`Running app at port: ${APP_PORT}`)
})