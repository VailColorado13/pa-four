const express = require('express')
const ejs = require('ejs')
const mainRoutes = require('./routes/mainRoutes')

const app = express()
app.set('view engine' , 'ejs')

app.use('/', mainRoutes)

app.listen(1337, () => {
    console.log(`server running on 1337`)
})