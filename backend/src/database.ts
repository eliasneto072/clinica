import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.POSTGRES_DB as string, process.env.POSTGRES_USER as string, process.env.POSTGRES_PASSWORD as string,  {
  host: 'postgres', // Use o nome do serviço 
  dialect: 'postgres',
});


// Função para tentar autenticar com retry
async function authenticateWithRetry(retries: number = 5, delay: number = 5000) {
  for (let i = 0; i < retries; i++) {
    try {
      await sequelize.authenticate();
      console.log('Conexão com o banco de dados estabelecida com sucesso.');
      return;
    } catch (error) {
      console.error(`Tentativa ${i + 1} de conexão falhou:`, error);
      await new Promise(res => setTimeout(res, delay));
    }
  }
  console.error('Todas as tentativas de conexão falharam.');
  process.exit(1); // Saia do processo se não conseguir conectar
}

// Chame a função de autenticação com retry
authenticateWithRetry();

export default sequelize;
