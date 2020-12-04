const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://root:admin@cluster0.faqbw.mongodb.net/<dbname>?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = mongoose;