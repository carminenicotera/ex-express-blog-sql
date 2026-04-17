const express = require('express');
const dbConnection = require('./database/connection');
const postsRouter = require('./routers/posts');
const errorsHandler = require('./middlewares/errorsHandler');
const notFound = require('./middlewares/notFound')

const app = express();

// Serviamo i file statici dalla cartella public/images
app.use(express.static('public'));

// Middleware per parsare il corpo delle richieste JSON
app.use(express.json())

// Registro il router dei post con prefisso /posts
app.use('/posts', postsRouter);

// Rotta principale
app.get('/', (req, res) => {
  //Array.mop('test')
  res.send('Server del mio blog');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});

// Middleware per gestire gli errori
app.use(errorsHandler)

// Middleware per gestire le rotte non trovate
app.use(notFound)