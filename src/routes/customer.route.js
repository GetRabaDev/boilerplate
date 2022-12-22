const express = require('express');
const { verify } = require('../middleware/verifyToken');
const { signUpValidate } = require('../validations/user.validations');
const {
  createPrayer,
  getAllMyTestimony,
  getAllPrayers,
  getAllTestimony,
  getMyPrayers,
  getTestimony,
  testify,
  updatePrayer,
} = require('../controller/user.controller');

const router = express.Router();

router.use(verify);

// learning
router.post('/post-prayers', createPrayer);

router.get('/get-all-prayers', getAllPrayers);

router.get('/get-my-prayers', getMyPrayers);

router.patch('/prayer-answered/:prayer_id', updatePrayer);

router.post('/post-testimony', testify);

router.get('/post-testimony/:id', getTestimony);

router.get('/all-testimony', getAllTestimony);

router.post('/my-testimonies', getAllMyTestimony);

module.exports = router;
