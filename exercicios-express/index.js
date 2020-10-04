const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
/*
Dois launchers utilizados:  nodemon e pm2(que é mais para produção e mais profissional)
O pm2 é bom para microserviços

a ordem das funções influenciam na resposta 

O .use aceita qualquer tipo de requisição(delete, get post...)

O next() é utilizado para passar para a outra função
*/
// o resultado dessa função(.text() && .json()) é uma função middleware

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())//  text/plain
app.use(bodyParser.json())//  application/json
app.use(bodyParser.urlencoded({extended: true})) //urlencoded é tipo de dado de um forms no html

app.use(saudacao('arlene'))

app.use((req, res, next) => {
  console.log('Antes...')
  next() //o next poderia ser substituido por qualquer outro nome mas ele é o mais usual no node.js
})

app.post('/clientes/relatorio', (req,res) => {
  //essa middleware é mais especifica do que a rota 'clientes/:id' então ela deve vir 
  //acima da middleware que é considerada como geral.
  res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res, next) => {
  /*
  let corpo = '';
  
  o .on vai receber qualquer tipo de de dado.
  formato textual o retorno
  req.on('data', function(parte) {
    corpo += parte;
  })

  req.on('end', function() {
    res.send(corpo);
  })
  */
  res.send(JSON.stringify(req.body))
})

app.get('/clientes/:id',(req,res) => {
  res.send(`Cliente ${req.params.id} selecionado`);
})



app.get('/opa', (req, res, next) => {
  console.log('Durante...')
  res.json({
    name: 'rooi',
    sobrenome:'leticia ne'
  })
  //res.send('Oi <b>estou bem</b>!');
  next()
})

app.use((req, res, next) => {
  console.log('Depois...')
  next() //o next poderia ser substituido por qualquer outro nome mas ele é o mais usual no node.js
})

app.listen(3000, () => {
  console.log('backend funcionando')
});