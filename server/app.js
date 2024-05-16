const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const port = process.env.PORT || 4200;

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "admin",
  database: "online",
};
const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données : " + err.stack);
    return;
  }
  console.log("Connecté à la base de données MySQL");
});
