const TableVinyls = (vinyl) => {
  const view = `
    <tr class="bg-white border-b  border-gray-700">
      <td class=" px-6 py-4">
        ${vinyl.id}
      </td>
      <th scope="row" class="flex items-center px-6 py-4 gap-3 font-medium text-gray-900 whitespace-nowrap ">
        <img class="w-10 h-10 rounded"
          src=${vinyl.image_url}
          alt="">
        <div class="ps-3¨¨">
          <p class="text-base font-semibold text-gray-500">${vinyl.title}</p>
          <p class="font-normal text-gray-500">${vinyl.artist} </p>
        </div>
      </th>
      <td class=" px-6 py-4">
        ${vinyl.genre}
      </td>
      <td class="px-6 py-4">
        ${vinyl.stock}
      </td>
      <td class="px-6 py-4">
        $${vinyl.price}
      </td>
      <td class="px-6 py-4">
        <button
          data-id=${vinyl.id} class="font-medium text-red-500 bg-red-100 hover:text-red-700 hover:bg-red-200 px-2 py-1 rounded cursor-pointer transition-colors duration-300 delete-btn">Delete</button>
      </td>
    </tr>
  `;
  return view
}

export default TableVinyls;