const teamModel = require("../models/teams");
const jwt = require("jsonwebtoken");

async function createTeam(req,res) {
    try {
        const { teamName , inviteCode } = req.body;
        
        const token = req.cookies.token;
        let decodedToken;
        try {
            decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        
        const createdBy = decodedToken.id;

        const team = await teamModel.create({
            teamName: teamName,
            inviteCode: inviteCode,
            createdBy: createdBy
        }) 

        res.status(201).json(team);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getTeams(req,res) {
    try {
        const token = req.cookies.token;
        let decodedToken;
        try {
            decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const userId = decodedToken.id;
        const teams = await teamModel.find({ createdBy: userId });
        res.status(200).json(teams);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}



module.exports = {
    createTeam,
    getTeams
}