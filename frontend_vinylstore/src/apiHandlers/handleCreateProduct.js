import formCreateProduct from "../api/CreateProduct";

const handleFormSubmit = async (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const artist = document.getElementById('artist').value;
  const genre = document.getElementById('genre').value;
  const stock = parseInt(document.getElementById('stock').value);
  const price = parseInt(document.getElementById('price').value);
  const image_url = document.getElementById('image_url').value;

  const newProductData = {
    title,
    artist,
    genre,
    stock,
    price,
    image_url,
  };

  try {
    const createdProduct = await formCreateProduct(newProductData);
    console.log('Product created: ', createdProduct);
    alert('Product created');
    document.getElementById('create-product-form').reset();
  } catch (error) {
    console.error('Error al crear el producto', error);
    alert(`Error al crear el producto: ${error.message}`);
  }
};

export default handleFormSubmit;