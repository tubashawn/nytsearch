const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var NYTSchema = new Schema({
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

const NYTSearch = mongoose.model("nytreact", NYTSchema);

module.exports = NYTSearch;