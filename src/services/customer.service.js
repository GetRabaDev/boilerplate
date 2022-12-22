const httpStatus = require('http-status');
const mongoose = require('mongoose');
const { prayerRepo, testimonyRepo, userRepo } = require('../dbservices');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/tokenManagement');
const { abortIf } = require('../utils/responder');
const { userDTO } = require('../DTOs/user.dto');

class CustomerService {
  createPrayer = async (data, user_id) => {
    const todoPrayer = {
      ...data,
      user: user_id,
    };
    const todo = await prayerRepo.create(todoPrayer);
    const user = await userRepo.findCustomer({ _id: user_id });
    user.prayers.push(todo);
    user.save();
    return todo;
  };

  getAllPrayer = async (user_id) => {
    let prayers;
    if (!user_id) {
      prayers = await prayerRepo.findAll({});
    } else {
      prayers = await prayerRepo.findAll({ user: user_id });
    }
    return prayers;
  };

  updatePrayer = async (data, prayer_id) => {
    const prayer = await prayerRepo.update(data, { _id: prayer_id });
    return prayer;
  };

  testify = async (data, user_id) => {
    const testimonyData = { ...data, user: user_id };
    const testimony = await testimonyRepo.create(testimonyData);
    const user = await userRepo.findCustomer({ _id: user_id });
    user.testimony.push(testimony);
    user.save();
    return testimony;
  };

  getTestimony = async (_id) => {
    let testimony = await testimonyRepo.find({ _id });
    return testimony;
  };

  getAllTestimony = async (user_id) => {
    let prayers;
    if (!user_id) {
      prayers = await testimonyRepo.findAll({});
    } else {
      prayers = await testimonyRepo.findAll({ user: user_id });
    }
    return prayers;
  };
}

module.exports = {
  CustomerService,
};
