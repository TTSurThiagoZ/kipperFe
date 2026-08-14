# --- Estágio 1: Build da aplicação ---
FROM node:24-alpine AS build

WORKDIR /app

# Copia arquivos de dependências primeiro (aproveita o cache do Docker)
COPY package*.json ./

# Instala as dependências
RUN npm i

# Copia todo o restante do código-fonte
COPY . .

# Compila a aplicação usando o Vite (geralmente gera a pasta /dist)
RUN npm run build

# --- Estágio 2: Servidor Web de Produção ---
FROM nginx:alpine

# Copia os arquivos estáticos gerados no estágio de build para o Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]