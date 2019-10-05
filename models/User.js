const mongoose = require('mongoose');
// const Schema = mongoose.Schema; is destructured below
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);

