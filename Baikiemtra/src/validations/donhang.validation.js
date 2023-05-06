const Joi = require('joi');

const createDonhang = {
  body: Joi.object().keys({
    makh: Joi.string().required(),
    ngaydathang: Joi.string().optional(),
    trangthai: Joi.string().optional(),
  }),
};

const getDonhangs = {
  query: Joi.object().keys({
    makh: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getDonhang = {
  params: Joi.object().keys({
    makh: Joi.string().required(),
  }),
};

const updateDonhang = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object()
    .keys({
      ngaydathang: Joi.string().optional(),
      trangthai: Joi.string().optional(),
    })
    .min(1),
};

const deleteDonhang = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

module.exports = {
  createDonhang,
  getDonhangs,
  getDonhang,
  updateDonhang,
  deleteDonhang,
};
