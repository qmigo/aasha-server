require('express-async-errors')
require('dotenv').config()

const express = require('express')
const app = express()
const router = require('./routes/main')

const connectDB = require('./db/connect')

app.use(express.json())
app.use('/api/v1', router)

app.get('/', (req, res)=>{
    res.status(200).end('Hello World')
})

const start = ()=>{
    connectDB(process.env.MONGO_URI)
    app.listen(process.env.PORT, ()=>{
        console.log(`http://localhost:${process.env.PORT}`)
    })
}

start()

