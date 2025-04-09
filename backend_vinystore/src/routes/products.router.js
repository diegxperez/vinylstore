const router = require('express').Router();
const { ProductsController } = require('../controllers');
const { validatorHandler } = require('../middlewares/validator.handler');
const { getProductSchema } = require('../schemas/product.schema');

router.get('/', ProductsController.getProducts);

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  ProductsController.getProductById);

router.post('/', ProductsController.createProduct);
router.patch('/:id', ProductsController.updateProduct);
router.delete('/:id', ProductsController.deleteProduct);

module.exports = router;