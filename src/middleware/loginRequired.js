import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req,res, next) => {
    const {authorization} = req.headers;
    if(!authorization) return res.status(401).json("Login inválido")

    const [, token] = authorization.split(' ');

    try{
        const dados = jwt.verify(token, 'gdf51dfg5df1gdf6dg1gdf6gdf1gdg56g1dfdgf65g1dgd5gd1gdf6');
        const { id, email } = dados;

        const user = await User.findOne({
            where: {
                id: id.id, 
                email
            }
        })
        
        if(!user) return res.status(401).json("Usuário Inválido")

        req.userId = id;
        req.userEmail = email;
        
        return next()
    }catch(err){
        return res.status(401).json("Token inválido")
    }
}


// como teste foi passado a header no insomnia
// authorization : Bearer + token
