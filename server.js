const express = require('express')
const app = express()
const port = 3000
let data = require('./data/elements.json')
const helper = require('./helper.js')


app.use(express.static('./static'))
app.get('/data', (req,res)=>{
    let randomizedData = helper.shuffleItems(data)
    res.send(randomizedData)
})


app.listen(port, ()=>{
    console.log('Server is running on port:' + port)
})
