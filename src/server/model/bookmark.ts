//  grab the things we need
import mongoose = require("mongoose");
let Schema = mongoose.Schema;
//  create a schema
let bookmarkSchema = new Schema({
    title: { type: String, required: true },
    address:String,
    isFavorite:Boolean,
    likes:Number,
    votes:Number
});

//  on every save, add the date
bookmarkSchema.pre("save", function(next) {
    //any pre save
    next();
});


//  the schema is useless so far
//  we need to create a model using it
let Bookmark = mongoose.model("Bookmark", bookmarkSchema);

//  make this available to our users in our Node applications
module.exports = Bookmark;