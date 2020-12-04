const mongoose = require ('../../database');

const PostSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
  },
  content:{
    type:String,
    require:true,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  CreatedAt:{
    type:Date,
    default: Date.now,
  },
});

const Posts = mongoose.model('Posts', PostSchema);

module.exports = Posts;


