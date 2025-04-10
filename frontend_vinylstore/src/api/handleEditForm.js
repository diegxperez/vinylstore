import formEditProduct from "../utils/formEditProduct ";

const handleEditForm = async (event) => {
  event.preventDefault();

  const id = parseInt(document.getElementById('edit-id').value);
  const title = document.getElementById('edit-title').value;
  const artist = document.getElementById('edit-artist').value;
  const genre = document.getElementById('edit-genre').value;
  const stock = parseInt(document.getElementById('edit-stock').value);
  const price = parseFloat(document.getElementById('edit-price').value);
  const image_url = document.getElementById('edit-image_url').value;

  const newProductData = {
    title,
    artist,
    genre,
    stock,
    price,
    image_url,
  };

  for (const key in newProductData) {
    const value = newProductData[key];
    if ((typeof value === 'string' && value.length === 0) || (typeof value === 'number' && isNaN(value))) {
      delete newProductData[key];
    }
  }

  try {
    const createdProduct = await formEditProduct(id, newProductData);
    alert(createdProduct);
  } catch (error) {
    console.error('Error al crear el producto', error);
    alert(`Error al crear el producto: ${error.message}`);
  }
};

export default handleEditForm;