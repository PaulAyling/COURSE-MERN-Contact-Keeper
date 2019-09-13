const mongoose = require('mongoose');

const InfoshotSchema = mongoose.Schema({
  OwnerUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  subjectQuestion: {
    type: String,
    required: true,
    default: 'Should I............?'
  },
  defaultTemplateType: {
    type: String,
    required: true,
    default: '3-column'
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  users: {
    id: Number,
    name: String,
    imageUrl: String,
    itemsCreated: Array,
    itemsSelected: Array
  },
  main: {
    parentId: {
      type: Number
    }
  }
});

module.exports = mongoose.model('infoshot', InfoshotSchema);
