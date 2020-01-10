const express = require('express')
const app = express()
let data = require('./data/elements.json')
const port = 3000

app.use(express.static('./static'))
app.get('/express_backend', (req,res)=>{
    res.send(data)
    //console.log(data)
})


app.listen(port, ()=>{
    console.log('Server is running on port:' + port)
})
