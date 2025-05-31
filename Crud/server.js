const express = require('express');
const app = express();
const port = 3000;

//chamar um módulo para o caminho do arquivo
const path = require('path');

//chamar a conexão com o banco
const db = require('./db');


//informar a URL absoluta para os arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//rotas do servidor
app.get('/', (req, res) => {
   // res.send('Servidor funcionando');
   res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const apiRoutes = require('./routes/api'); //importamos o conjunto de rotas

app.use(express.json()); //para o servidor interpretar as requisições via json

app.use('/api/users', apiRoutes); //agruparmos as rotas em um único lugar


app.listen(port, () => {
    console.log("Servidor rodando na porta 3000");
})
