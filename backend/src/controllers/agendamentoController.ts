// controllers/agendamentoController.ts
import { Request, Response } from 'express';
import { Agendamento } from '../models/agendamento';

export const createAgendamento = async (req: Request, res: Response) => {
  try {
    const agendamento = await Agendamento.create(req.body);
    res.status(201).json(agendamento);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAgendamentos = async (req: Request, res: Response) => {
  try {
    const agendamentos = await Agendamento.findAll();
    res.status(200).json(agendamentos);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
