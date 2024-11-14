// app.ts
import express from 'express';
import cors from 'cors';
import sequelize from './database';
import pacienteRoutes from './routes/pacienteRoutes';
import agendamentoRoutes from './routes/agendamentoRoutes';


const app = express();

app.use(cors()); // Habilita CORS para todas as rotas
app.use(express.json());

app.use('/pacientes', pacienteRoutes);
app.use('/agendamentos', agendamentoRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  try {
    await sequelize.sync({ alter: true });
    console.log('Database synchronized');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
