FROM node:18-alpine AS development

# Crear directorio de la aplicacion
WORKDIR /usr/src/app

# Instalar NestJS CLI globalmente
RUN npm install -g @nestjs/cli

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de la aplicacion
COPY . .

# Compilar la aplicacion
RUN npm run build

# Etapa de produccion
FROM node:18-alpine AS production

# Establecer NODE_ENV
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Crear directorio de la aplicacion
WORKDIR /usr/src/app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar solo dependencias de produccion
RUN npm install --only=production

# Copiar el codigo compilado desde la etapa de desarrollo
COPY --from=development /usr/src/app/dist ./dist
COPY --from=development /usr/src/app/.env ./.env

# Exponer el puerto
EXPOSE 3000

# Comando para iniciar la aplicacion
CMD ["node", "dist/main.js"]