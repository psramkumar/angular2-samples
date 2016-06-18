//  grab the things we need
import mongoose = require("mongoose");
let Schema = mongoose.Schema;
//  create a schema
let taskSchema = new Schema({
    title: { type: String, required: true },
    // username: { type: String, required: true },
    completed: Boolean,
    description: String,
    created_at: Date,
    updated_at: Date
});

//  on every save, add the date
taskSchema.pre("save", function(next) {
    //  get the current date
    let currentDate = new Date();
    //  change the updated_at field to current date
    this.updated_at = currentDate;
    //  if created_at doesn"t exist, add to that field
    if (!this.created_at)
        this.created_at = currentDate;
    next();
});


//  the schema is useless so far
//  we need to create a model using it
let Task = mongoose.model("Task", taskSchema);

//  make this available to our users in our Node applications
module.exports = Task;