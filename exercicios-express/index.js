const express = require('express')
const app = express()

const saudacao = require('./saudacaoMid')
/*
Dois launchers utilizados:  nodemon e pm2(que é mais para produção e mais profissional)
O pm2 é bom para microserviços

a ordem das funções influenciam na resposta 

O .use aceita qualquer tipo de requisição(delete, get post...)

O next() é utilizado para passar para a outra função
*/

app.use(saudacao('arlene'))
//app.listen(3000, saudacao);
app.use((req, res, next) => {
  console.log('Antes...')
  next() //o next poderia ser substituido por qualquer outro nome mas ele é o mais usual no node.js
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