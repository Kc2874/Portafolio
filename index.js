const express = require('express')
const app = express()
const port = 3000

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('view engine','ejs')
app.set('views',__dirname+'/views')

app.get('/', (req, res) => {
  //res.send('Página principal')
  console.log(__dirname)
  res.render('index')
})

app.get('/datos', (req, res) => {
  res.render('datos',{
  titulo:"seccion educación",
  descripcion:"aqui encontraras mi informacion academica"
})
})

app.get('/perfil', (req, res) => {
  res.render('perfil',{
  titulo:"seccion educación",
  descripcion:"aqui encontraras mi informacion academica"
})
})

app.get('/educacion', (req, res) => {
    res.render('educacion',{
    titulo:"seccion educación",
    descripcion:"aqui encontraras mi informacion academica"
  })
  })

  app.get('/experiencial', (req, res) => {
    res.render('experiencial')
  })

  app.get('/referencias', (req, res) => {
    res.render('referencias')
  })

  app.use((req,res,next) =>{
    res.status(404).sendFile(__dirname +'/public/404.html')
  })
app.listen(port, () => {
  console.log(`Acceda al servidor haciendo click aqui http://localhost:${port}`)
})