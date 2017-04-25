const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const util = require('util')
const request = require('request')
const cheerio = require('cheerio')
const db = require('./db')



app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/details', (req, res) => {
  res.render('details')
})

app.get('/admin', (req, res) => {
  res.render('admin')
})

const url = 'http://www.africanbookstore.net/products.asp?cat=Biography+Books'
app.get('/getBooks', (req, res) => {
  request(url, (error, response, html) => {

    if(!error) {
      let $ = cheerio.load(html.toString())
      let books = []

      $('.prodimage').find( (index, element) => {
        console.log($('.prodimage').data);



      })

    }
  })


})

app.listen(3000, () => {
  console.log('App live on Port 3000')
})
