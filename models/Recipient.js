const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;
// LOOK AT MONGOOSE DOCUMENTATION TO SEE MORE OPTIONS FOR SCHEMA