import User from '../models/User';
import jwt from 'jsonwebtoken';

class TokenController {
    async store(req, res, next) {
        const {email = '' , password = ''} = req.body;

        if(email === '' || password === '' || !email || !password) return res.status(401).json("Dados inválidos ou vazios")

        const user = await User.findOne({where: {email}})

        if(!user) return res.status(401).json("Usuário inválido")

        if(!(await user.passwordValid(password))) return res.status(401).json("Senha inválida")

        const id = user;
        const date = new Date();
        const token = jwt.sign( {id, email} , 'gdf51dfg5df1gdf6dg1gdf6gdf1gdg56g1dfdgf65g1dgd5gd1gdf6', { expiresIn: date.getDate() + 7 + 'd' })

        console.log(email, password);
        res.json({token})
    }
}

export default new TokenController