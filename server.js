const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

// Utiliser CORS pour autoriser les requêtes cross-origin
app.use(cors());

// Servir le script d'automatisation
app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'bundle.js'));
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
  console.log('Pour lancer l\'automatisation, utilisez le nouveau bookmarklet dans votre navigateur.');
});
