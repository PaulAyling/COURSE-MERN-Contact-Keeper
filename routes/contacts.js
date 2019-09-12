const express = require('express');
const router = express.Router();


// not longer do app.get or app.post

//@route    GET  api/contacts
//@desc     Get all users contacts
// @access  Private
router.get('/',(req,res) =>{
  res.send('Get all contacts');
});
//@route    POST  api/contacts
//@desc     Add new contact
// @access  Private
router.post('/',(req,res) =>{
  res.send('Add contact');
});
//@route    PUT  api/contacts/:id
//@desc     update a contact
// @access  Private
router.put('/:id',(req,res) =>{
  res.send('Update contacts');
});
//@route    GET  api/contacts
//@desc     Get all users contacts
// @access  Private
router.get('/',(req,res) =>{
  res.send('Get all contacts');
});
//@route    DELETE  api/contacts
//@desc     Delete a contact
// @access  Private
router.delete('/:id',(req,res) =>{
  res.send('Delete a contact');
});

module.exports = router