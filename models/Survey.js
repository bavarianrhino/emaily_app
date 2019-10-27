const mongoose = require('mongoose');
// const Schema = mongoose.Schema; is destructured below
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient')

const surveySchema = new Schema({
    tile: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surveys', surveySchema);

// LOOK AT MONGOOSE DOCUMENTATION TO SEE MORE OPTIONS FOR SCHEMA