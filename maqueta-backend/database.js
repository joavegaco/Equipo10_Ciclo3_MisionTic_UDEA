
var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:"https://Equipo10-Ciclo3-MisionTic-UDEA.firebaseio.com"
});

const db = admin.firestore();

module.exports = db