async function DeleteProduct(productId) {
  try {
    const res = await fetch(`http://localhost:3000/api/v1/products/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      const error = await res.json();
      console.error(`Error 404: with ID  ${productId}`, error);
      return false;
    }
    const productUpdated = await res.json();
    console.log('Exit: Product eliminated', productUpdated);
    return true;
  } catch (error) {
    console.log(`Error: ${error}`);
    return false;
  }
}

export default DeleteProduct;