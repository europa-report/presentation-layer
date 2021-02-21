const express = require('express')
const http = require('http')
const path = require('path')




const app = express()

app.use(express.static(path.join(__dirname, '..', 'public')));

const PORT = 3000

app.get('/',(req, res)=>{
    res.send('<h1>Hello World!!!</h1>')
})

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})
