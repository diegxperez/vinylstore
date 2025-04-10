import Header from '../templates/Header';
import EditProduct from '../pages/EditProduct';
import Home from '../pages/Home';
import CreateProduct from '../pages/CreateProduct';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import handleFormSubmit from '../api/handleFromSubmit';
import handleEditForm from '../api/handleEditForm';

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
  console.log(hash);
  console.log(route);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();

  if (route === '/create-product') {
    const formCreate = document.getElementById('create-product-form');
    formCreate.addEventListener('submit', handleFormSubmit);
  } else if (route === '/edit-product') {
    const formEdit = document.getElementById('edit-product-form');
    formEdit.addEventListener('submit', handleEditForm);
  }
};

export default router;