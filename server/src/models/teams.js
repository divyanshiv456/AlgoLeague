const mongoose = require('mongoose');

const teamsSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },

    inviteCode: {
        type: String,
        required: true,
        unique: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    role: {
        type: String,
        default: "leader"
    }
})

const teams = new mongoose.model("teams", teamsSchema);

module.exports = teams;