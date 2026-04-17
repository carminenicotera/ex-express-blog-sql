// Controller per i post
// Qui mettiamo la logica delle funzioni per gestire i post

// Importiamo l'array dei post dal file di dati
const posts = require('../data/posts');
const db = require('../database/connection');

// Funzione per ottenere tutti i post (index)
function index(req, res) {
  const tag = req.query.tag;

  db.query('SELECT * FROM posts', (err, results) => {
    if (err) {
      console.error('Errore query posts:', err.message);
      return res.status(500).json({ error: 'Errore interno del server' });
    }

    let filteredPosts = results;
    if (tag) {
      filteredPosts = results.filter(post => {
        if (!post.tags) return false;
        return Array.isArray(post.tags)
          ? post.tags.includes(tag)
          : String(post.tags).includes(tag);
      });
    }

    res.json(filteredPosts);
  });
}

// Funzione per ottenere un singolo post (show)
function show(req, res) {
  const postId = Number(req.params.id);
  const post = posts.find(post => post.id === postId);

  if (!post) {
    return res.status(404).json({ error: `Post ${postId} non trovato` });
  }

  res.json(post);
}

// Funzione per creare un nuovo post (store)
function store(req, res) {
  //console.log(req.body);
  // Creiamo un nuovo post con i dati ricevuti nel corpo della richiesta
  // Generiamo un nuovo ID incrementale basato sull'ultimo post nell'array
  const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;

  // Creiamo un nuovo oggetto post con i dati ricevuti e il nuovo ID
  const newPost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    tags: req.body.tags || []
  };

  // Aggiungiamo il nuovo post all'array dei post
  posts.push(newPost);
  console.log(posts);
  
  // Restituiamo il nuovo post creato in formato JSON con status 201 (Created)
  res.status(201).json(newPost);
}

// Funzione per aggiornare un post (update)
function update(req, res) {
  const postId = Number(req.params.id);
  const postindex = posts.findIndex(post => post.id === postId);

  if (postindex === -1) {
    return res.status(404).json({ error: `Post ${postId} non trovato` });
  }

  // Aggiorniamo i campi del post con i dati ricevuti nel corpo della richiesta (se presenti) o manteniamo quelli esistenti se non vengono forniti nel corpo della richiesta 
  posts[postindex].title = req.body.title || posts[postindex].title;
  posts[postindex].content = req.body.content || posts[postindex].content;
  posts[postindex].tags = req.body.tags || posts[postindex].tags;

  console.log('Lista post aggiornata:', posts);
  res.json(posts[postindex]);
}

// Funzione per eliminare un post (destroy)
function destroy(req, res) {
  const postId = Number(req.params.id);
  const postindex = posts.findIndex(post => post.id === postId);
 
  if (postindex === -1) {
    return res.status(404).json({ error: `Post ${postId} non trovato` });
  }

  posts.splice(postindex, 1);
  console.log('Lista post aggiornata:', posts);
  res.status(204).send();
}

// Esportiamo le funzioni per usarle nel router
module.exports = {
  index,
  show,
  store,
  update,
  destroy
};