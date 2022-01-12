const mongoose              = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
require('dotenv').config();

// Connecting Mongoose
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser   : true,
  useUnifiedTopology: true,
});

// Setting up the schema
const Users = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email   : {type: String, unique: true, required: true},
  admin   : {type: Boolean, default: false}
});

// Setting up the passport plugin
Users.plugin(passportLocalMongoose);

module.exports = mongoose.model('Users', Users);
