const router = require('express').Router();
const { ProductsController } = require('../controllers');

router.get('/', ProductsController.getProducts);
router.get('/:id', ProductsController.getProductById);
router.post('/', ProductsController.createProduct);
router.patch('/:id', ProductsController.updateProduct);
router.delete('/:id', ProductsController.deleteProduct);

module.exports = router;