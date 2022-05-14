const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/name', (req, res) => {
    res.json({
        name: 'Thor Odinson'
    })
})

app.listen(PORT, () => {
    console.log(`connected to port ${PORT}`)
})