"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
    async create(req, res, next) {
        try{
            // const novoUser = await User.create({
            //     nome: 'João Pedro',
            //     email: 'jpfreitass@hotmail.com',
            //     password: '123456'
            // })
            const novoUser = await _User2.default.create(req.body)
            const {id, nome, email} = novoUser
            return res.json({id, nome, email})
        }catch(e){
            return res.status(400).json({
                errors:e.errors.map(err => err.message)
            });
        }
    }

    async index(req,res){
        try{
            // no findAll caso nao tenha parametro ira retornar todos os dados do usuario
            const users = await _User2.default.findAll({ attributes: ['id' , 'nome', 'email']});
            return res.json(users)
        }catch(e){
            return res.json(null)
        }
    }

    async show(req,res){
        try{
            const user = await _User2.default.findByPk(req.params.id);
            const {id, nome, email} = user
            return res.json({id, nome, email})
        }catch(e){
            return res.json(null)
        }
    }

    async update(req,res){
        try{
            console.log(req.userId)
            const user = await _User2.default.findByPk(req.userId.id);

            if(!user) return res.status(400).json("Usuário inexistente")

           const novoData = await user.update(req.body)
           const {id, nome, email} = novoData
            return res.json({id, nome, email})
        }catch(e){
            return res.status(400).json(e.message);
        }
    }

    async delete(req,res){
        try{
            const user = await _User2.default.findByPk(req.userId.id);

            if(!user) return res.status(400).json("Usuário inexistente.")

            await user.destroy()

            return res.json('Usuário excluido com sucesso.')
        }catch(e){
            return res.status(400).json({
                errors:e.errors.map(err => err.message)
            });
        }
    }
}

exports. default = new UserController