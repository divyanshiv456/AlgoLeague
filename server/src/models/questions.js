const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: String,
  link: String,
  difficulty: String,
  points: Number,

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  expiresAt: {
    type: Date,
    required: true
  }
});

questionSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;