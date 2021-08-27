const express = require("express");
const router = express.Router();

const { defaultRoute , signin, signup, deleteUser, resetPassword, updatePassword, updateProfile, getProfile } = require('../controller/user');
const auth = require("../middleware/auth");

router.get('/', defaultRoute); 
router.post('/getProfile',getProfile);
router.post('/signin', signin);
router.post('/signup', signup);
router.delete('/deleteAccount', auth, deleteUser);
router.post('/resetPassword', resetPassword);
router.post('/updatePassword', updatePassword);
router.patch('/update', auth, updateProfile); 

module.exports = router;