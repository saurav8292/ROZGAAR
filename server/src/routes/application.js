const express = require("express"); 
const { seekerAppn,empAppn, extractEmpPosts } = require("../controller/application"); 

const router = express.Router(); 

router.post('/seekerAppn', seekerAppn);  
router.post('/empAppn/:jobPostId' , empAppn); 
router.post('/empAppn', empAppn); 
router.post('/extractEmpPosts', extractEmpPosts);


module.exports = router