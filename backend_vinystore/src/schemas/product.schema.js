const Joi = require('joi');

const id = Joi.number().integer().min(1);
const title = Joi.string().min(3).max(255);
const artist = Joi.string().min(3).max(100);
const genre = Joi.string().min(3).max(100);
const stock = Joi.number().integer().positive().max(100);
const image_url = Joi.string().uri();
const price = Joi.number().positive().precision(2);

const createProductSchema = Joi.object({
  title: title.required(),
  artist: artist.required(),
  genre: genre.required(),
  stock: stock.required(),
  price: price.required(),
  image_url: image_url.required(),
});

const updateProductSchema = Joi.object({
  title: title,
  artist: artist,
  genre: genre,
  stock: stock,
  price: price,
  image_url: image_url,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createProductSchema,
  getProductSchema,
  updateProductSchema,
};