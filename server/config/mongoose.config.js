const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/authorsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connection to the database was successful."))
  .catch(err => console.log("Connection to the database failed: ", err));