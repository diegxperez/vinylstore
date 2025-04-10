const boom = require('@hapi/boom');
const query = require('../db/postgres.pool');

class ProductsService {

  static async getProducts() {
    const { rows } = await query('SELECT * FROM products');
    return rows;
  }

  static async getProductById(id) {
    const { rows } = await query('SELECT * FROM products WHERE id = $1', [id]);
    if (!rows.length) throw boom.notFound('No se encontro el producto');
    return rows[0];
  }

  static async createProduct(productData) {
    const { title, artist, genre, stock, price, image_url } = productData;
    const result = await query('INSERT INTO products (title, artist, genre, stock, price, image_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [title, artist, genre, stock, price, image_url]);
    return result.rows[0];
  }

  static async updateProduct(id, updates) {
    const setClauses = [];
    const values = [];
    let paramIndex = 1;

    for (const key in updates) {
      setClauses.push(`${key} = $${paramIndex}`);
      values.push(updates[key]);
      paramIndex++;
    }
    values.push(id);

    const queryText = `UPDATE products SET ${setClauses.join(', ')} WHERE id = $${paramIndex} RETURNING *;`;

    const result = await query(queryText, values);
    return result.rows[0];
  }

  static async deleteProduct(id) {
    const { rows } = await query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
    return rows[0];
  }
}

module.exports = ProductsService;