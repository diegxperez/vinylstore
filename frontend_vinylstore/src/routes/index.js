import Header from '../templates/Header';
import EditProduct from '../pages/EditProduct';
import Home from '../pages/Home';
import CreateProduct from '../pages/CreateProduct';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import handleFormSubmit from '../apiHandlers/handleCreateProduct';
import handleEditForm from '../apiHandlers/handleEditProduct';
import renderVinylList from '../apiHandlers/handleGetVinylList';
import getVinylList from '../api/GetVinyls';

const routes = {
  '/': Home,
  '/create-product': CreateProduct,
  '/edit-product': EditProduct,
};

const router = async () => {

  const header = document.getElementById('header') || null;
  const content = document.getElementById('content') || null;
  header.innerHTML = Header();

  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();

  async function router() {
    if (route === '/create-product') {
      const formCreate = document.getElementById('create-product-form');
      formCreate.addEventListener('submit', handleFormSubmit);
    } else if (route === '/edit-product') {
      const formEdit = document.getElementById('edit-product-form');
      formEdit.addEventListener('submit', handleEditForm);
    } else if (route === '/') {
      let vinyls = await getVinylList();
      renderVinylList(vinyls);
    }
  };

  router();
}

export default router;