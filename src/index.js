// console.log('Hello World')
let express = require('express')

let app = express()
let personRoutes = require('./routes/person')

app.use(personRoutes)
app.use(express.static('public'))

const PORT  = process.env.PORT ||  3000;


app.listen(PORT,()=>{console.log('Server start on port',PORT)})