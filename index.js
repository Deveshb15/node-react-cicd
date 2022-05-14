const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 5000

app.use(cors())

app.use(express.static(path.join(__dirname, 'client/dist')))

app.get('/name', (req, res) => {
    res.json({
        name: 'Thor Odinson the God of Thunder'
    })
})

app.listen(PORT, () => {
    console.log(`connected to port ${PORT}`)
})