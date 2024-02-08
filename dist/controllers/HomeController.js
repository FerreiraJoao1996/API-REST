"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

class HomeController {
    async index(req, res, next) {
        // const novoAluno = await Aluno.create({
        //     nome: 'João Pedro',
        //     sobrenome: 'Ferreira',
        //     email: 'jpfreitass@hotmail.com',
        //     idade: 26,
        //     peso: 67,
        //     altura: 1.69
        // })

        res.json('Index')
    }
}

exports. default = new HomeController