const mongoose = require('mongoose');
const { route } = require('../../app');

const team_membersSchema = new mongoose.Schema({
    teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teams',
        required: true
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },

    role: {
        type: String,
        enum: ['leader', 'member'],
        default: 'member'
    },

    score: {
        type: Number,
        default: 0
    },

    streak: {
        type: Number,
        default: 0
    },

    lastSolvedAt: {
        type: Date,
        default: null
    },

    joinedAt: {
        type: Date,
        default: Date.now
    }

})

const team_members = new mongoose.model("team_members", team_membersSchema);

module.exports = team_members;