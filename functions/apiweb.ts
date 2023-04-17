import express from "express";
import odbc from "odbc";

const app = express();

// Connexion à la base de données HFSQL
const connectionString =
  "DRIVER={HFSQL};ANA=D:\\Sirius\\Donnees\\AGRI" +
  "\\Version\\Sirius.Wd7\\Sirius.wdd;" +
  "REP=D:\\Sirius\\Donnees\\AGRI\\GrpA\\";

// Route pour exécuter la requête de mise à jour
app.get("/update", async (req, res) => {
  try {
    const connection = await odbc.connect(connectionString);
    let sql = "UPDATE CLIENTS SET ";
    sql += "Adresse1 = '7place de la Liberté' ";
    sql += "WHERE clcleunik=68485";
    await connection.query(sql);
    await connection.close();
    res.send("La requête de mise à jour a été exécutée avec succès.");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("Une erreur s'est produite.");
  }
});

