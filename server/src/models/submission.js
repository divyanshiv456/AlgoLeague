const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true
  },

  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true
  },

  completed: {
    type: Boolean,
    default: true
  },

  proofLink: {
    type: String // optional (LeetCode link)
  },

  submittedAt: {
    type: Date,
    default: Date.now
  }
});

const Submission = mongoose.model("Submission", submissionSchema);

module.exports = Submission;

