// Page for model classes

// require mongoose library
const mongoose = require('mongoose');

// non destructured Schema pulling one property off the 
// object both lines are the same so the non destructured 
// one is commented out
// const Schema = mongoose.Schema;  same as line below.
// destructure Schema

const { Schema } = mongoose;

// creating a schema from the schema object above

const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);
