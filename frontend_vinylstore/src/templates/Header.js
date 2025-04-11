import iconVinyl from '../assets/icon-vinyl.svg';

const Header = () => {
  const view = `
     <div class="w-full flex justify-between py-6 border-b-1 border-gray-300 mb-8">
     <div class="flex items-center">
     <img src=${iconVinyl} alt="logo" class="h-6 w-auto"/>
     <h1>
        <a href="/" class="text-2xl">
          Vinyl<span class="font-bold">Store</span>
        </a>
      </h1>
     </div>
      
      <div class='flex gap-6'>
        <a href="#/create-product/" class='p-2 bg-blue-100 text-sm rounded text-blue-600 cursor-pointer hover:bg-blue-200 hover:text-blue-800 transition-colors duration-300'>
          Create Product
        </a>
        <a href="#/edit-product/" class='p-2 bg-blue-100 text-sm rounded text-blue-600 cursor-pointer hover:bg-blue-200 hover:text-blue-800 transition-colors duration-300'>
          Edit Product
        </a>
      </div>
    </div>
  `;
  return view
}

export default Header;