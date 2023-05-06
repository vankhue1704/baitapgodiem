const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { donhangService } = require('../services');

const createDonhang = catchAsync(async (req, res) => {
  const donhang = await donhangService.createDonhang(req.body);
  res.status(httpStatus.CREATED).send(donhang);
});

const getDonhangs = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await donhangService.queryDonhangs(filter, options);
  res.send(result);
});

const getDonhang = catchAsync(async (req, res) => {
  const donhang = await donhangService.getDonhangById(req.params.id);
  if (!donhang) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Donhang not found');
  }
  res.send(donhang);
});

const updateDonhang = catchAsync(async (req, res) => {
  const donhang = await donhangService.updateDonhangById(req.params.id, req.body);
  res.send(donhang);
});

const deleteDonhang = catchAsync(async (req, res) => {
  await donhangService.deleteDonhangById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createDonhang,
  getDonhangs,
  getDonhang,
  updateDonhang,
  deleteDonhang,
};
