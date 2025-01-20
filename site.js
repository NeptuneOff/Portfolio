// Importation des modules nécessaires
const express = require('express');
const path = require('path');

// Création de l'application Express
const app = express();

// Définir le port sur lequel le serveur va écouter
const PORT = process.env.PORT || 3000;

// Définir le dossier public contenant le site Web
const publicDirectory = path.join(__dirname, 'public');

// Servir les fichiers statiques du dossier public
app.use(express.static(publicDirectory));

// Route par défaut pour capturer les requêtes non gérées
app.get('*', (req, res) => {
    res.status(404).send('Page non trouvée');
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Le serveur est en cours d'exécution sur http://localhost:${PORT}`);
    console.log(`Les fichiers statiques sont servis depuis le dossier: ${publicDirectory}`);
});
