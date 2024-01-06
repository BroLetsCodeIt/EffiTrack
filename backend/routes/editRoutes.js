const express = require('express');
const router = express.Router();
const fetchContestData = require('../controllers/futureContestController');
const {auth} = require("../middleware/authMiddleware");
const { editImage, 
        editLeetcodeUsername, 
        editCodeforceUsername, 
        editCodechefUsername, 
        editGithubUsername} = require('../controllers/editProfileControllers');

router.route('/profileImage').post(auth,editImage)
router.route('/leetcode').post(auth,editLeetcodeUsername)
router.route('/codefroces').post(auth,editCodeforceUsername);
router.route('/codechef').post(auth,editCodechefUsername);
router.route('/github').post(auth,editGithubUsername);

module.exports= router;