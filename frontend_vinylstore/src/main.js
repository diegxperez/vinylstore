
async function fetchProducts(params) {
  try {
    const response = await fetch('http://localhost:3000/api/v1/products');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error', error);
    return [];
  }
}

function renderProducts(products) {
  const container = document.getElementById('products-container');

  if (!container) {
    console.error("Error: El contenedor con ID 'products-container' no existe en el DOM.");
    return;
  }

  container.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("w-[197px]", "rounded-md", "p-4");

    card.innerHTML = `
      <img
        src="${product.image_url}"
        alt="${product.title}"
        class="w-full h-auto rounded-md mb-2" 
      >
      <p class="text-lg font-semibold mb-1">${product.title}</p>
      <p class="text-sm text-gray-600 mb-1">Artista ID: ${product.artist_id}</p>
      <p class="text-black font-semibold">$${product.price}</p>
      <button class="bg-[#D5F1FF]  text-black  py-2 px-4 rounded mt-2">
        ADD TO CART
      </button>
    `;
    container.appendChild(card);
  });
}

async function initialize() {
  const products = await fetchProducts();
  renderProducts(products);
}

initialize();

