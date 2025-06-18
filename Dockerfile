FROM node:20-alpine AS builder
#diz para o docker qual a vesão do node que vamos usar, e para começar a construção de uma imagem node

WORKDIR /app
#diz para o docker qual o diretório de trabalho que vamos usar

COPY package*.json ./
#copia os arquivos package.json e package-lock.json para o diretório de trabalho

RUN npm install
#instala as dependências do projeto

COPY . .
#copia todo o conteúdo do diretório atual para o diretório de trabalho

RUN npm run build
#roda o comando de build do projeto

FROM node:20-alpine AS runner
#cria uma nova imagem limpa baseada no node:20-alpine para rodar a aplicação

WORKDIR /app
#diz para o docker qual o diretório de trabalho que vamos usar

RUN addgroup -g 1001 nodejs && \
    adduser -D -u 1001 -G nodejs nodejs
#cria um novo grupo e usuário para rodar a aplicação com permissões limitadas

# Copia os arquivos da build otimizada (standalone) do estágio 'builder'
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

USER nodejs
#define o usuário que vai rodar a aplicação
EXPOSE 3000
#expondo a porta 3000 para acesso externo

ENV PORT 3000
#define a porta que a aplicação vai rodar
CMD ["node", "server.js"]
#comando para iniciar a aplicação, rodando o servidor Node.js

# Para construir a imagem, use o comando:
# docker build -t nome-da-imagem .