// const catchAsync = require('../utils/catchAsync');
const catchAsync = require('../utils/catchAsync');
const { CustomerService } = require('../services');
const {
  successResponse,
  abortIf,
  redirect,
  download,
  downloadPdfFile,
  downloadFile,
} = require('../utils/responder');
const { paginate, paginateOptions } = require('../utils/paginate');

const customerService = new CustomerService();

const createPrayer = catchAsync(async (req, res, next) => {
  const todo = await customerService.createPrayer(req.body, req.user_id);
  return successResponse(req, res, todo);
});

const getAllPrayers = catchAsync(async (req, res, next) => {
  const todo = await customerService.getAllPrayer(req.query.user_id);
  return successResponse(req, res, todo);
});

const getMyPrayers = catchAsync(async (req, res, next) => {
  const todos = await customerService.getAllPrayer(req.user_id);
  return successResponse(req, res, todos);
});

const updatePrayer = catchAsync(async (req, res, next) => {
  const todos = await customerService.updatePrayer(
    req.body,
    req.params.prayer_id
  );
  return successResponse(req, res, todos);
});

const testify = catchAsync(async (req, res, next) => {
  const todos = await customerService.testify(req.body, req.user_id);
  return successResponse(req, res, todos);
});

const getTestimony = catchAsync(async (req, res, next) => {
  const todos = await customerService.getTestimony(req.params.id);
  return successResponse(req, res, todos);
});

const getAllTestimony = catchAsync(async (req, res, next) => {
  const todos = await customerService.getAllTestimony(req.query.user_id);
  return successResponse(req, res, todos);
});

const getAllMyTestimony = catchAsync(async (req, res, next) => {
  const todos = await customerService.getAllTestimony(req.user_id);
  return successResponse(req, res, todos);
});

module.exports = {
  getAllMyTestimony,
  getAllTestimony,
  getTestimony,
  testify,
  updatePrayer,
  getMyPrayers,
  getAllPrayers,
  createPrayer,
};
