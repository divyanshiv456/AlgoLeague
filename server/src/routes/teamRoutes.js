const express = require('express');
const { createTeam } = require('../controllers/teamsController');
const router = express.Router();

router.post('/create', createTeam);


module.exports = router;
