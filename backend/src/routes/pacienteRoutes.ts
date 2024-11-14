// routes/pacienteRoutes.ts
import { Router } from 'express';
import { createPaciente, getPacientes } from '../controllers/pacienteController';

const router = Router();

router.post('/', createPaciente);
router.get('/', getPacientes);

export default router;
