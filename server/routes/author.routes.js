const AuthorController = require('../controllers/author.controller');

module.exports = function(app) {
  // CREATE
  app.post('/api/authors', AuthorController.createAuthor);
  // READ ALL
  app.get('/api/authors', AuthorController.findAllAuthors);
  // READ ONE
  app.get('/api/authors/:id', AuthorController.findOneAuthor);
  // UPDATE
  app.put('/api/authors/:id', AuthorController.updateAuthor);
  // DELETE
  app.delete('/api/authors/:id', AuthorController.deleteAuthor);
}