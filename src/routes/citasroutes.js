import { Router } from "express";
import { methods as pacientesController} from "./../controllers/pacientes_controller";

const router = Router();

router.get('/', pacientesController.getPacientes);
router.get('/:numero_cedula', pacientesController.getPaciente);
router.post('/nuevo-paciente', pacientesController.addPacientes);
router.put('/:numero_cedula', pacientesController.updatePaciente);
router.delete('/:numero_cedula', pacientesController.deletePaciente);
export default router;