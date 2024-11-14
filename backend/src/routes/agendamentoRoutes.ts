// routes/agendamentoRoutes.ts
import { Router } from 'express';
import { createAgendamento, getAgendamentos } from '../controllers/agendamentoController';

const router = Router();

router.post('/', createAgendamento);
router.get('/', getAgendamentos);

export default router;
