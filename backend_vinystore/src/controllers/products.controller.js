const { ProductsService } = require('../service');

class ProductsController {
  static async getProducts(req, res) {
    const products = await ProductsService.getProducts();
    res.status(200).json(products);
  }

  static async getProductById(req, res, next) {
    try {
      const product = await ProductsService.getProductById(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      next(error)
    }
  };

  static async createProduct(req, res) {
    const { title, artist_id, genre_id, stock, price, imagen } = req.body;
    const newProduct = await ProductsService.createProduct({ title, artist_id, genre_id, stock, price, imagen });
    res.status(201).json(newProduct);
  }

  static async updateProduct(req, res) {
    const { id } = req.params;
    const update = req.body;
    const updatedProduct = await ProductsService.updateProduct(id, update);
    res.status(200).json(updatedProduct);
  }

  static async deleteProduct(req, res) {
    const result = await ProductsService.deleteProduct(req.params.id);
    res.status(200).json(result);
  }
}

module.exports = ProductsController;