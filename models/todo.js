const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    text: String
})
module.exports = mongoose.model('todo', todoSchema);