const express = require('express');
const router = express.Router();

// Importiamo le funzioni dal controller
const postController = require('../controllers/postController');

// Rotte CRUD per i post

// Index: lista dei post in JSON
router.get('/', postController.index);

// Show: restituisce un singolo post in JSON
router.get('/:id', postController.show);

// Store: conferma la creazione di un nuovo post
router.post('/', postController.store);

// Update: conferma la modifica di un post esistente
router.put('/:id', postController.update);

// Destroy: conferma la cancellazione del post
router.delete('/:id', postController.destroy);

module.exports = router;