# Usa uma imagem base do Node
FROM node:16

# Define o diretório de trabalho
WORKDIR /app

# Copia o package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o código para o contêiner
COPY . .

# Compila o código TypeScript
RUN npm run build

# Define a porta que o contêiner vai expor
EXPOSE 5000

# Comando para iniciar o servidor
CMD ["npm", "run", "start"]
