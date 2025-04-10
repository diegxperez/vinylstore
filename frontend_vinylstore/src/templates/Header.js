const Header = () => {
  const view = `
     <div class="w-full flex justify-between py-6">
      <h1>
        <a href="/" class="text-2xl">
          VinylStore
        </a>
      </h1>
      <div class='flex gap-6'>
        <a href="#/create-product/" class='p-2 bg-blue-100 text-base rounded text-neutral-600 cursor-pointer'>
          Create Product
        </a>
        <a href="#/edit-product/" class='p-2 bg-blue-100 text-base rounded text-neutral-600 cursor-pointer'>
          Edit Product
        </a>
      </div>
    </div>
  `;
  return view
}

export default Header;