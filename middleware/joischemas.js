const Joi = require("joi");
const JoiSchemas = {
  foodLIST: {
    page: Joi.number(), // Joi.number().required(),
    pageSize: Joi.number(), // Joi.number().required()
  },
  foodPOST: Joi.object().keys({
    name: Joi.string().required(),
    calories: Joi.string().required()
  }),
  foodById: {
      id: Joi.number
  }
  // define all the other schemas below
};
module.exports = JoiSchemas;
