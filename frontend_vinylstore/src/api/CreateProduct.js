async function formCreateProduct(productData) {
  try {
    const res = await fetch('http://localhost:3000/api/v1/products/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error(`Error 404:  ${error}`);
      return null;
    }
    return true;
  } catch (error) {
    console.log(`Error: ${error}`);
    return null;
  }
}

export default formCreateProduct;