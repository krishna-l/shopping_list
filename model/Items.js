const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create our schema

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Item = mongoose.model("item", ItemSchema);
