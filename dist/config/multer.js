"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// para salvar fotos

var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

exports. default = {
    storage: _multer2.default.diskStorage({
        fileFilter: (req, file, cb) => {
            if(file.mimetype !== "image/jpeg" && file.mimetype !== "image/png"){
                return cb (new _multer2.default.MulterError('Formato de imagem deve ser JPG ou PNG'))
            }
            return cb(null, true);
        },
        destination: (req, file, cb) => {
            // primeiro parametro trata o erro, o segundo é o caminho da pasta
            cb(null, _path.resolve.call(void 0, __dirname, "..", "..", "uploads", "images"));
        },
        filename: (req, file, cb) => {
            cb(null,`${Date.now()}${_path.extname.call(void 0, file.originalname )}`)
        },
    })
}