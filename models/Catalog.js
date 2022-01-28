const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  title: { type: String },
  description: { type: String },
  memory: { type: String },
  imgURL: { type: String },
});

module.exports = model("Catalog", schema);
