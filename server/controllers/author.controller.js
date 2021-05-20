const {Author} = require('../models/author.model');


module.exports.findAllAuthors = (req,res) =>{
  Author.find({})
    .then(allAuthors => res.json(allAuthors))
    .catch(err => res.json({ message: "something went wrong", error: err }));
}


module.exports.findOneAuthor = (req,res) => {
  Author.findOne({ _id: req.params.id })
    .then(author => res.json(author))
    .catch(err => res.json(err));
}


module.exports.createAuthor = (req,res) => {
  const { name } = req.body;
  Author.create({name})
    .then(newAuth => res.json(newAuth))
    .catch(err => res.status(400).json(err))
}


module.exports.updateAuthor = (req,res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new:true, runValidators: true })
    .then(updateAuth => res.json(updateAuth))
    .catch(err => res.status(500).json(err));
}


module.exports.deleteAuthor = (req,res) => {
  Author.deleteOne({ _id: req.params.id })
    .then(deleteAuth => res.json(deleteAuth))
    .catch(err => res.json(err));
}