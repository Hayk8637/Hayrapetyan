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
  name: {type: String, required: true},
  surname: {type: String, required: true},
  password: {type: String, required: true},
  profit: {type: Number, required: true},
  dataTo: {type: Number , required: true},
  dataOff: {type: Number , required: false},
  email   : {type: String, unique: true, required: true},
  admin   : {type: Boolean, default: false}
});

// Setting up the passport plugin
Users.plugin(passportLocalMongoose);

module.exports = mongoose.model('Users', Users);
