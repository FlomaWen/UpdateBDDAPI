const express = require('express');
const odbc = require('odbc');

const app = express();

//////////////////////////////////
// permettre l'accès à l'API (CORS)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token,Origin, X-Requested-With, Content, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  
  app.use(async (req, res) => {
    try {
      const connectionString = "DRIVER={HFSQL};ANA=D:\\Sirius\\Donnees\\AGRI\\Version\\Sirius.Wd7\\Sirius.wdd;REP=D:\\Sirius\\Donnees\\AGRI\\GrpA\\Agri001\\";
      const connection = await odbc.connect(connectionString);
      let sql = "UPDATE CLIENTS SET Adresse1 = '7 place de la liberté' WHERE clcleunik = '68485'";
      await connection.query(sql);
      await connection.close();
      res.send('La requête de mise à jour a été exécutée avec succès.');
    } catch (error) {
      console.error(error);
      res.status(500).send('Une erreur s\'est produite.');
    }
  });

module.exports = app;