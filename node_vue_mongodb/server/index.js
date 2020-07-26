const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")

const app = express()

//middleware
app.use(bodyparser.json())
app.use(cors())

//routes
const posts = require('./routes/api/posts')

app.use('/api/posts',posts)

const port = process.env.PORT || 5000;

app.listen(port ,() => console.log(`server running at ${port}`))