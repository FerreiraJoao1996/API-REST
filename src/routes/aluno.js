import { Router } from "express";
import alunoController from "../controllers/AlunoController";
import loginRequired from "../middleware/loginRequired";
const router = new Router();

router.get('/', alunoController.index)
router.post('/',loginRequired, alunoController.create)
router.put('/',loginRequired, alunoController.update)
router.get('/:id', alunoController.show)
router.delete('/:id',loginRequired, alunoController.delete)

export default router;