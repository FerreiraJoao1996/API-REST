// para salvar fotos

import multer from "multer";
import { extname, resolve} from 'path';

export default {
    storage: multer.diskStorage({
        fileFilter: (req, file, cb) => {
            if(file.mimetype !== "image/jpeg" && file.mimetype !== "image/png"){
                return cb (new multer.MulterError('Formato de imagem deve ser JPG ou PNG'))
            }
            return cb(null, true);
        },
        destination: (req, file, cb) => {
            // primeiro parametro trata o erro, o segundo é o caminho da pasta
            cb(null, resolve(__dirname, "..", "..", "uploads", "images"));
        },
        filename: (req, file, cb) => {
            cb(null,`${Date.now()}${extname(file.originalname )}`)
        },
    })
}