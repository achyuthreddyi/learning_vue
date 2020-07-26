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

// handle production
if(process.env.NODE_ENV === 'production') {
    //static folder
    app.use(express.static(__dirname+'/public'))
    // handle SPA
    app.get(/.*/,(req,res) =>res.sendFile(__dirname + '/public/index.html') );
}

const port = process.env.PORT || 5000;

app.listen(port ,() => console.log(`server running at ${port}`))