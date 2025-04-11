import TableVinyls from "../components/itemsTable";
import DeleteProduct from "../api/DeleteVinyl";
import getVinylList from "../api/GetVinyls";

const renderVinylList = async (vinyls) => {
  const vinylsBody = document.getElementById("vinyl-list");
  let rows = '';
  vinyls.forEach(vinyl => {
    rows += TableVinyls(vinyl);
  });
  vinylsBody.innerHTML = rows;

  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', async (event) => {
      const productId = event.currentTarget.dataset.id;
      const confirmation = window.confirm(`Are you sure you want to delete the product with ID ${productId}?`);

      if (confirmation) {
        try {
          const deleted = await DeleteProduct(productId);
          if (deleted) {
            let vinyls = await getVinylList();
            renderVinylList(vinyls);
            alert(`Product deleted ID: ${productId}`);
          } else {
            alert(`Failed to delete the product with ID  ${productId}`);
          };
        } catch (error) {
          console.error('Failed to delete the product.  ', error);
          alert(`Failed to delete the product.  ${error.message}`)
        };
      };
    })
  })
}

export default renderVinylList;

