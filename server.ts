const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const authRoutes = require('./routes/authRoutes')
const studentRoutes = require('./routes/studentRoutes')


const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors());
app.use('/auth', authRoutes)
app.use('/students', studentRoutes);


app.listen(PORT, ()=> {
    console.log(`server running on http://localhost:${PORT}`)
})