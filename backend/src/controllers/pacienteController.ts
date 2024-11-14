// controllers/pacienteController.ts
import { Request, Response } from 'express';
import { Paciente } from '../models/paciente';

export const createPaciente = async (req: Request, res: Response) => {
  try {
    const paciente = await Paciente.create(req.body);
    res.status(201).json(paciente);
  } catch (error: any) {

    res.status(400).json({ error: error.message });
  }
};

export const getPacientes = async (req: Request, res: Response) => {
  try {
    const pacientes = await Paciente.findAll();
    res.status(200).json(pacientes);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
