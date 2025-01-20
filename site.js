// Importation des modules nécessaires
const express = require('express');
const path = require('path');

// Création de l'application Express
const app = express();

// Définir le port sur lequel le serveur va écouter
const PORT = process.env.PORT || 8080;

// Définir le dossier public contenant le site Web
const publicDirectory = path.join(__dirname, 'public');

// Servir les fichiers statiques du dossier public
app.use(express.static(publicDirectory));

// Route pour toutes les requêtes non gérées, renvoyant vers index.html (SPA support)
app.get('*', (req, res) => {
    res.sendFile(path.join(publicDirectory, 'index.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
    console.log(`Les fichiers statiques sont servis depuis : ${publicDirectory}`);
});
