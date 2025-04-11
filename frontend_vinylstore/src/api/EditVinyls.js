async function formEditProduct(productId, productDataUpdate) {
  try {
    const res = await fetch(`http://localhost:3000/api/v1/products/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productDataUpdate),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error(`Error 404: with ID  ${productId}`, error);
      return false;
    }
    const productUpdated = await res.json();
    console.log('Exit: Product updated', productUpdated);
    return true;
  } catch (error) {
    console.log(`Error: ${error}`);
    return false;
  }
}

export default formEditProduct;