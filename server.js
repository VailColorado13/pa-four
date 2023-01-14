const express = require('express')
const ejs = require('ejs')
const mainRoutes = require('./routes/mainRoutes')
const path = require('path')


const app = express()
app.set('view engine' , 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/', mainRoutes)



app.listen(process.env.PORT || 1337, ()=>{
    console.log('Server is running.')
})    