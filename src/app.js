// File: app.mjs
import express from 'express';
import {resolve} from 'path'

import home from './routes/home.js';
import user from './routes/user.js';
import token from './routes/token.js';
import aluno from './routes/aluno.js';
import foto from './routes/foto.js';

import './database/index.js'

class App {
    constructor(){
        this.app = express();
        this.middleware();
        this.routes();
    }

    middleware(){
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(express.static(resolve(__dirname, 'uploads')));
    }

    routes(){
        this.app.use('/', home);
        this.app.use('/users', user);
        this.app.use('/token', token);
        this.app.use('/alunos', aluno);
        this.app.use('/fotos', foto);
    }
}

export default new App().app;
