const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Pessoa = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})