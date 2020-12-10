require('dotenv').config();

const express = require('express');
const bobyParser = require('body-parser');
const userRoutes = require('./routes/usuario');
const dashRoutes = require('./routes/dash')
const cors = require('cors');

const server = express();

//CONFIGURAÇÕES
server.use(express.json());
server.use(bobyParser.json());
server.use(cors());

//ROTAS
server.use('/usuario', userRoutes);
server.use('/dash', dashRoutes);

server.listen(process.env.WEBSITES_PORT);