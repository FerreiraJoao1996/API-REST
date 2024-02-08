"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

class TokenController {
    async store(req, res, next) {
        const {email = '' , password = ''} = req.body;

        if(email === '' || password === '' || !email || !password) return res.status(401).json("Dados inválidos ou vazios")

        const user = await _User2.default.findOne({where: {email}})

        if(!user) return res.status(401).json("Usuário inválido")

        if(!(await user.passwordValid(password))) return res.status(401).json("Senha inválida")

        const id = user;
        const date = new Date();
        const token = _jsonwebtoken2.default.sign( {id, email} , 'gdf51dfg5df1gdf6dg1gdf6gdf1gdg56g1dfdgf65g1dgd5gd1gdf6', { expiresIn: date.getDate() + 7 + 'd' })

        console.log(email, password);
        res.json({token})
    }
}

exports. default = new TokenController