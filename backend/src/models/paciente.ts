// models/paciente.ts
import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database';

export const Paciente = sequelize.define('Paciente', {
  nome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  telefone: { type: DataTypes.STRING },
});
