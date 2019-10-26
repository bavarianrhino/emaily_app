const mongoose = require('mongoose');
// const Schema = mongoose.Schema; is destructured below
const { Schema } = mongoose;

const surveySchema = new Schema({
    tile: String,
    body: String,
    subject: String,
    recipients: [String]
});

mongoose.model('surveys', surveySchema);

// LOOK AT MONGOOSE DOCUMENTATION TO SEE MORE OPTIONS FOR SCHEMA