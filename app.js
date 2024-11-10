const express = require('express');
const app = express()
app.use(express.static('public'))
const PORT = process.env.PORT
const HOST = process.env.HOST
const router = require('./routers/router.js')
const cors = require('cors')
app.use(express.json())
app.use(cors())


app.listen(PORT, () => {
    console.log(`this server is on ${HOST}: ${PORT}`);
    
})

app.get('/', (req, res) => {
    res.send(`Salve questa è la mia e-commerce`)
})