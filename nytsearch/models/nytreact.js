const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NYTSchema = new Schema({
    // title/date/url
    title: {
        type: String,
        trim: true,
        required: true
    }, 
    author: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: Date,
        trim: true,
        required: true
    },
    url: {
        type: String,
        trim: true,
        required: true
    }
});

const nytreact = mongoose.model("nytreact", NYTSchema);

module.exports = nytreact;