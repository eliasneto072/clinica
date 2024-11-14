// models/agendamento.ts
import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database';
import { Paciente } from './paciente';

export const Agendamento = sequelize.define('Agendamento', {
  data: { type: DataTypes.DATE, allowNull: false },
  hora: { type: DataTypes.TIME, allowNull: false },
});

Paciente.hasMany(Agendamento);
Agendamento.belongsTo(Paciente);
