const router = require('express').Router();
const { ProductsController } = require('../controllers');
const { validatorHandler } = require('../middlewares/validator.handler');
const { getProductSchema, createProductSchema, updateProductSchema } = require('../schemas/product.schema');

router.get('/', ProductsController.getProducts);

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  ProductsController.getProductById);

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  ProductsController.createProduct);

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  ProductsController.updateProduct);

router.delete('/:id', ProductsController.deleteProduct);

module.exports = router;