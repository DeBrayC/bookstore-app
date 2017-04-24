const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const util = require('util')
const request = require('request')
const cheerio = require('cheerio')



app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('App live on Port 3000')
})
