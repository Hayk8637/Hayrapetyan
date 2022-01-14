const mongoose              = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
require('dotenv').config();

// Connecting Mongoose
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser   : true,
    useUnifiedTopology: true,
});

// Setting up the schema
const Loads = new mongoose.Schema({
    CustomerName: {type: String, required: true, unique: true},
    CustomerMC: {type: String, required: true, unique: true},
    CustomerReferenceNumber: {type: String, required: true, unique: true},
    CustomerRate: {type: String, required: true, unique: true},
    CustomerContact: {type: String, required: true, unique: true},
    CarierName: {type: String, required: true, unique: true},
    CarierMC: {type: String, required: true, unique: true},
    CarierRate: {type: String, required: true, unique: true},
    CarierContact: {type: String, required: true, unique: true},
    PickUpData: {type: String, required: true, unique: true},
    PickUpTime: {type: String, required: true, unique: true},
    PickUpName: {type: String, required: true, unique: true},
    PickUpAddress: {type: String, required: true, unique: true},
    PickUpCity: {type: String, required: true, unique: true},
    PickUpZip: {type: String, required: true, unique: true},
    DeliveryData: {type: String, required: true, unique: true},
    DeliveryTime: {type: String, required: true, unique: true},
    DeliveryName: {type: String, required: true, unique: true},
    DeliveryAddress: {type: String, required: true, unique: true},
    DeliveryCity: {type: String, required: true, unique: true},
    DeliveryZip: {type: String, required: true, unique: true},
    LoadWeight: {type: String, required: true, unique: true},
    LoadCommodity: {type: String, required: true, unique: true},
    LoadType: {type: String, required: true, unique: true},
    LoadDistance: {type: String, required: true, unique: true}
});

// Setting up the passport plugin
Loads.plugin(passportLocalMongoose);

module.exports = mongoose.model('Loads', Loads);
