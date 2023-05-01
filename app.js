const express = require("express");
const app = express();  
const expbhs = require("express-handlebars")

app.engine('handlebars', expbhs.engine())
app.set('view engine', 'handlebars')
 

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/adm-dashboard', (req, res) => {
    res.render('dashboard-adm')
})

app.get('/aluno-dashboard', (req, res) => {
    res.render('dashboard-adm')
})

app.get('/restaurante-dashboard', (req, res) => {
    res.render('dashboard-restaurante')
})

app.get('/registro', (req, res) => {
    res.render('registre')
})



app.get('/', (req, res) => {
    res.render('home')
})

app.listen(4000, () => {
    console.log('Servidor funcionando')
})   