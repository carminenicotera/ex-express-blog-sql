// in questo file ci occupiamo di creare la connessione al database MySQL usando il pacchetto mysql2. Esportiamo la connessione per poterla usare in altri file del progetto, ad esempio nei router per eseguire query al database. 
const mysql2 = require('mysql2');

const credentials = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'my-db-user-name',
  password: process.env.DB_PASSWORD || 'my-secret-password',
  database: process.env.DB_NAME || 'my-db-name',
}; 

const connection = mysql2.createConnection(credentials);

connection.connect((err) => {
  if (err) {
    console.error('Errore di connessione al DB:', err);
    return;
  }
  console.log('Connessione al database riuscita!');
});

module.exports = connection;
