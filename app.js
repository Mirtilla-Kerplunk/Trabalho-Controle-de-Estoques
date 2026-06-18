/**
 * Servidor back-end utilizando o módulo Express para criar uma API REST
 * e realizar as operações de CRUD no banco de dados PostgreSQL 
 * (GET,POST,PUT,DELETE).
 */

//Importação dos módulos utilizados no projeto
//Express
const express = require('express');
//Criar a instância do aplicativo express
const app = express();
//Dotenv
//Carregar as variáveis de ambiente definidas no arquivo .env
require('dotenv').config();

//Configuração do IP e da PORTA do servidor
const hostname = process.env.APP_HOST;
const port = process.env.APP_PORT;

//importando as informações das rotas cliente
const clienteRotas = require('./routes/cliente');
//importando as informações das rotas produto
const produtoRotas = require('./routes/produto');
//importando as informações das rotas entrada
const entradaRotas = require('./routes/entrada');
//importando as informações das rotas login
const loginRotas = require('./routes/login');
//importando as informações das rotas saida
const saidaRotas = require('./routes/saida');
//importando as informações das rotas fornecedor
const fornecedorRotas = require('./routes/fornecedor');

//Definição de rota raiz "/"
//Configuração do servidor
app.get('/', (req, res) => {
    res.sendFile('login.html', {root: 'paginas'});
});

//Indica que o servidor irá responder com dados Json
app.use(express.json());
app.use(express.static('paginas'));

//Expor as rotas do servidor
app.use('/cliente', clienteRotas);
app.use('/produto', produtoRotas);
app.use('/entrada', entradaRotas);
app.use('/login', loginRotas);
app.use('/saida', saidaRotas);
app.use('/fornecedor', fornecedorRotas);

//Inicio do servidor
app.listen(port, hostname, async () =>{
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
