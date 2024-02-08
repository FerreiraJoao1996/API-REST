"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _loginRequired = require('../middleware/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

var _FotoController = require('../controllers/FotoController'); var _FotoController2 = _interopRequireDefault(_FotoController);


// depois de configurar o multer, chamamos ele e as configuraçoes e passamos como uma middleware para onde quiser
// nele, devemos definir quantos arquivos vamos receber, no exemplo abaixo receberá somente um arquivo


const router = new (0, _express.Router)();

router.post('/',_loginRequired2.default,  _FotoController2.default.store)

exports. default = router;