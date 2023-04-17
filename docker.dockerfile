# Utilisez une image existante en tant que point de départ
FROM node:14

# Définit le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copie les fichiers de package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers dans le conteneur
COPY . .

# Expose le port 3000
EXPOSE 3000

# Démarre l'application
CMD [ "npm", "start" ]
