// shchema de donnees

const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  Description: { type: String, required: true },
  ImageUrl: { type: String, required: true },
  Prix: { type: Number, required: true }

});

module.exports = mongoose.model('schema', thingSchema);