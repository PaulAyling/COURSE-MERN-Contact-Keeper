const express = require('express');
const router = express.Router();


//@route    GET  api/contacts
//@desc     Get all users contacts
// @access  Private
router.get('/',(req,res) =>{
  res.send('Get all infoshots');
});



module.exports = router;