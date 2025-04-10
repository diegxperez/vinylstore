const EditProduct = () => {
  const view = `
    <div>
      <h1 class="text-center text-2xl">Edit Vinyl</h1>
      <form id="edit-product-form" class="max-w-sm mx-auto">
        <div class="mb-5">
          <label for="edit-id" class="block mb-2 text-sm font-medium text-gray-900 ">ID *</label>
          <input type="text" id="edit-id"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-350"
            placeholder="12" required />
        </div>
        <div class="mb-5">
          <label for="edit-title" class="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
          <input type="text" id="edit-title"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-350"
            placeholder="Thriller" />
        </div>
        <div class="mb-5">
          <label for="edit-artist" class="block mb-2 text-sm font-medium text-gray-900 ">Artist</label>
          <input type="text" id="edit-artist"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-350"
            placeholder="Michael Jackson" />
        </div>
        <div class="mb-5">
          <label for="edit-genre" class="block mb-2 text-sm font-medium text-gray-900 ">Genre</label>
          <input type="text" id="edit-genre"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-350"
            placeholder="Pop" />
        </div>
        <div class="mb-5">
          <label for="edit-stock" class="block mb-2 text-sm font-medium text-gray-900 ">Stock</label>
          <input type="text" id="edit-stock"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-350"
            placeholder="15" />
        </div>
        <div class="mb-5">
          <label for="edit-price" class="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
          <input type="text" id="edit-price"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-350"
            placeholder="20" />
        </div>
        <div class="mb-5">
          <label for="edit-image_url" class="block mb-2 text-sm font-medium text-gray-900 ">Stock</label>
          <input type="text" id="edit-image_url"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-350"
            placeholder="https://vinyl.com/cdn/image" />
        </div>
        <button type="submit-edit"
          class="text-gray-800 bg-blue-100 hover:bg-blue-00 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Editar</button>
      </form>
    </div>
  `;
  return view;
};

export default EditProduct;