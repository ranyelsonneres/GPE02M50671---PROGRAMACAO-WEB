const express = require('express');
const app = express();
const port = 3000;

//chamar a conexão com o banco
const db = require('./db');

//rotas do servidor
app.get('/', (req, res) => {
    res.send('Servidor funcionando');
})

//const apiRoutes = require('./routes/api');
//app.use('/api/users', apiRoutes);



app.listen(port, () => {
    console.log("Servidor rodando na porta 3000");
})
