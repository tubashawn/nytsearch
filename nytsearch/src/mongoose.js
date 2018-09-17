import mongoose from "mongoose";

const Schema = mongoose.Schema;

var NYTSchema = new Schema({
    // title/date/url
    title: {
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

const NYTSearchSchema = mongoose.model("nytreact", NYTSchema);

module.exports = NYTSearchSchema;