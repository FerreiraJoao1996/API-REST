"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// File: app.mjs
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _path = require('path');

var _homejs = require('./routes/home.js'); var _homejs2 = _interopRequireDefault(_homejs);
var _userjs = require('./routes/user.js'); var _userjs2 = _interopRequireDefault(_userjs);
var _tokenjs = require('./routes/token.js'); var _tokenjs2 = _interopRequireDefault(_tokenjs);
var _alunojs = require('./routes/aluno.js'); var _alunojs2 = _interopRequireDefault(_alunojs);
var _fotojs = require('./routes/foto.js'); var _fotojs2 = _interopRequireDefault(_fotojs);

require('./database/index.js');

class App {
    constructor(){
        this.app = _express2.default.call(void 0, );
        this.middleware();
        this.routes();
    }

    middleware(){
        this.app.use(_express2.default.urlencoded({ extended: true }));
        this.app.use(_express2.default.json());
        this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads')));
    }

    routes(){
        this.app.use('/', _homejs2.default);
        this.app.use('/users', _userjs2.default);
        this.app.use('/token', _tokenjs2.default);
        this.app.use('/alunos', _alunojs2.default);
        this.app.use('/fotos', _fotojs2.default);
    }
}

exports. default = new App().app;
