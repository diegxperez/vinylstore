const CreateProduct = () => {
  const view = `
     <div>
      <h1 class="text-center text-2xl">Create New Vinyl</h1>
      <form id="create-product-form" class="max-w-sm mx-auto">
        <div class="mb-5">
          <label for="Title" class="block mb-2 text-sm font-medium text-gray-900 ">Title *</label>
          <input type="text" id="title"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-350"
            placeholder="Thriller" required />
        </div>
        <div class="mb-5">
          <label for="artist" class="block mb-2 text-sm font-medium text-gray-900 ">Artist *</label>
          <input type="text" id="artist"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-350"
            placeholder="Michael Jackson" required />
        </div>
        <div class="mb-5">
          <label for="genre" class="block mb-2 text-sm font-medium text-gray-900 ">Genre *</label>
          <input type="text" id="genre"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-350"
            placeholder="Pop" required />
        </div>
        <div class="mb-5">
          <label for="stock" class="block mb-2 text-sm font-medium text-gray-900 ">Stock *</label>
          <input type="text" id="stock"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-350"
            placeholder="15" required />
        </div>
        <div class="mb-5">
          <label for="price" class="block mb-2 text-sm font-medium text-gray-900 ">Price *</label>
          <input type="text" id="price"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-350"
            placeholder="20" required />
        </div>
        <div class="mb-5">
          <label for="image_url" class="block mb-2 text-sm font-medium text-gray-900 ">Stock *</label>
          <input type="text" id="image_url"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-350"
            placeholder="https://vinyl.com/cdn/image" required />
        </div>
        <button type="submit"
          class="text-gray-800 bg-blue-100 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium hover:font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer">Registrar</button>
      </form>
      </div>
  `;

  return view;
};

export default CreateProduct;