const express = require('express');
const { createTeam } = require('../controllers/teamsController');
const router = express.Router();

router.post('/create', createTeam);
router.get('/my-teams', getTeams);


module.exports = router;
