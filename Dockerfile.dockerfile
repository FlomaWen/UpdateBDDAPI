FROM node:14

# Créer un répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers de l'application
COPY package*.json ./
COPY . .

# Installer les dépendances
RUN npm install

# Exposer le port utilisé par l'application
EXPOSE 3000

# Lancer l'application
CMD ["npm", "start"]
