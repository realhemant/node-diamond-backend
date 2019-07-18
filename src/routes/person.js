let express = require('express')
let router = express.Router()

router.get('/person', (req , res)=>{
    res.send('You have request a person')
})

router.get('/person/:name', (req , res)=>{
    res.send('You have request a person ${req.param.name} ')
})
module.exports  = router