const express = require('express')
const { connectDB } = require('./Config/database')
const cors = require('cors')
const { foodRoute } = require('./Routes/food')
const UserRoute = require('./Routes/user')
const { addCartRoute } = require('./Routes/addCart')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())
app.use('/images', express.static('uploads'))

app.use('/api/food', foodRoute)
app.use('/api/user', UserRoute)
app.use('/api/cart', addCartRoute)
const port = process.env.PORT || 5000
const start = async() => {
    await connectDB('mongodb://localhost:27017')
    app.listen(port, () => console.log(`The server is running on port ${port}`))
}
start() 