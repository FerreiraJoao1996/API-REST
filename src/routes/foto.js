import { Router } from "express";
import loginRequired from "../middleware/loginRequired";

import fotoController from "../controllers/FotoController";


// depois de configurar o multer, chamamos ele e as configuraçoes e passamos como uma middleware para onde quiser
// nele, devemos definir quantos arquivos vamos receber, no exemplo abaixo receberá somente um arquivo


const router = new Router();

router.post('/',loginRequired,  fotoController.store)

export default router;