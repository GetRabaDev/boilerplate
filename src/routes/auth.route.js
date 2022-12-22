const express = require('express');
const { signUpValidate } = require('../validations/user.validations');
const {
  adminLogin,
  customerLogin,
  customerSignUp,
} = require('../controller/auth.controller');
const router = express.Router();

router.post('/signup', customerSignUp);
router.post('/login', customerLogin);

module.exports = router;
