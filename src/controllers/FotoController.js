import multer from "multer";
import multerConfig from "../config/multer";

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('arquivo');

class FotoController {
    store(req, res) {
        return upload(req, res, async (err) => {
            if(err){
                return res.status(400).json({
                    errors: [error.code]
                })
            }
            try {
                const {filename, originalname} = req.file
                const {aluno_id} = req.body;
                const foto = await Foto.create({filename, originalname, aluno_id})
                res.json(foto)
            } catch (error) {
                res.status(400).json('Aluno não encontado')
            }
            
        }) 
    }
}

export default new FotoController