// const catchAsync = require('../utils/catchAsync');
const catchAsync = require('../utils/catchAsync');
const { AuthService } = require('../services');
const {
  successResponse,
  abortIf,
  redirect,
  download,
  downloadPdfFile,
  downloadFile,
} = require('../utils/responder');
const { paginate, paginateOptions } = require('../utils/paginate');

const authService = new AuthService();

const customerLogin = catchAsync(async (req, res, next) => {
  const customerLogin = await authService.customerLogin(req.body);
  return successResponse(req, res, customerLogin);
});

const customerSignUp = catchAsync(async (req, res, next) => {
  const customer = await authService.customerSignUp(req.body);
  return successResponse(req, res, customer);
});

const adminLogin = catchAsync(async (req, res, next) => {
  // console.log(req.params.asset_id);
  const admin = await authService.adminLogin(req.body);
  return successResponse(req, res, admin);
});

module.exports = {
  customerLogin,
  customerSignUp,
  adminLogin,
};
