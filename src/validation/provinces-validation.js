import Joi from "joi";

export const createProvincesValidation = Joi.object({
  id: Joi.number().positive().required(),
  name: Joi.string().max(100).required(),
  name: Joi.string().max(20).optional(),
  capital: Joi.string().max(100).required(),
  image: Joi.string().max(500).optional(),
  island: Joi.string().max(50).required(),
  population: Joi.number().positive().optional(),
});
