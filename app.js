const express = require('express')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.get('/', () => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('App live on Port 3000')
})
