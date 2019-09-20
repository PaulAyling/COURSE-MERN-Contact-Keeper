const mongoose = require('mongoose');

const InfoshotSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  label: {
    type: String,
    required: true
  },
  linkUrl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('infoshot', InfoshotSchema);
