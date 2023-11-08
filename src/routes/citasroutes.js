import { Router } from "express";
import { methods as pacientesController} from "./../controllers/pacientes_controller";

const router = Router();

router.get('/', pacientesController.getPacientes);
router.post('/', pacientesController.addPacientes);
export default router;