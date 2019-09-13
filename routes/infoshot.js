const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');
const User = require('../models/User');

const Infoshot = require('../models/Infoshot');

//@route    GET  api/contacts
//@desc     Get all infoshotscontacts
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const infoshot = await Infoshot.find({ OwnerUserId: req.user.id }).sort({
      date: -1
    });
    res.json(infoshot);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route    POST  api/infoshot
//@desc     Add A New infoshot
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('subjectQuestion', ' Infoshot question is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      subjectQuestion,
      defaultTemplateType,
      users: id,
      users: name,
      users: imageUrl,
      users: itemsCreated,
      users: itemsSelected,
      main: parentId
    } = req.body;
    try {
      const newInfoshot = new Infoshot({
        subjectQuestion,
        defaultTemplateType,
        OwnerUserId: req.user.id,
        ContributorUserID: req.user.id,
        users: id,
        users: name,
        users: imageUrl,
        users: itemsCreated,
        users: itemsSelected,
        main: parentId
      });

      const infoshot = await newInfoshot.save();

      res.json(infoshot);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error2');
    }
  }
);

//@route    PUT  api/contacts/:id
//@desc     update a contact
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { subjectQuestion, defaultTemplateType } = req.body;

  //Build a contact object
  const infoshotFields = {};
  if (subjectQuestion) infoshotFields.subjectQuestion = subjectQuestion;
  if (defaultTemplateType)
    infoshotFields.defaultTemplateType = defaultTemplateType;
  try {
    let infoshot = await Infoshot.findById(req.params.id);

    if (!infoshot) return res.status(404).json({ msg: 'Infoshot not found' });

    // Make sure user owns contact
    if (infoshot.OwnerUserId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    infoshot = await Infoshot.findByIdAndUpdate(
      req.params.id,
      { $set: infoshotFields },
      { new: true }
    );
    res.json(infoshot);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route    DELETE  api/contacts
//@desc     Delete a contact
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let infoshot = await Infoshot.findById(req.params.id);

    if (!infoshot) return res.status(404).json({ msg: 'Contact not found' });

    // Make sure user owns infoshot
    if (infoshot.OwnerUserId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Infoshot.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Infoshot removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error3');
  }
});

module.exports = router;
