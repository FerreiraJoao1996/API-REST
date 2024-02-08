"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

class AlunoController {
    async index(req, res, next) {
        const alunos = await _Aluno2.default.findAll({
            order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
            include: {
                model: _Foto2.default,
                attributes: ['url','filename']
            },
        })
        res.json(alunos)
    }

    async create(req, res, next) {
        try{
            // const novoUser = await User.create({
            //     nome: 'João Pedro',
            //     email: 'jpfreitass@hotmail.com',
            //     password: '123456'
            // })
            const novoAluno = await _Aluno2.default.create(req.body)
            return res.json(novoAluno)
        }catch(e){
            return res.status(400).json(e);
        }
    }

    async show(req,res){
        try{
            const { id } =  req.params;
            console.log(id)
            if(!id) return res.status(400).json('ID inválido')

            const aluno = await _Aluno2.default.findByPk(id, {
                order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
                include: {
                    model: _Foto2.default,
                    attributes: ['url','filename']
                },
            });

            if(!aluno) return res.status(400).json('Aluno não encontrado')

            return res.json(aluno)
        }catch(e){
            return res.json(e)
        }
    }

    async update(req,res){
        try{
            const { id } =  req.params;

            if(!id) return res.status(400).json('ID inválido')

            const aluno = await _Aluno2.default.findByPk(id);

            if(!aluno) return res.status(400).json('Aluno não encontrado')

            const novoAluno = await aluno.update(req.body)

            return res.json(novoAluno)
        }catch(e){
            return res.json(e)
        }
    }

    async delete(req,res){
        try{
            const { id } =  req.params;

            if(!id) return res.status(400).json('ID inválido')

            const aluno = await _Aluno2.default.findByPk(id);

            if(!aluno) return res.status(400).json('Aluno não encontrado')

            await aluno.destroy()

            return res.json('Aluno deletado com sucesso')
        }catch(e){
            return res.json(e)
        }
    }
}

exports. default = new AlunoController