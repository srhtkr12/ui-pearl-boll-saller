import Home from '../../src/views/Home';
import User from '../../src/views/User';
import Products from '../../src/views/Products';

export const AppContent = [
  {
    title: 'Home',
    component: <Home />,
    navelink: '/'
  },
  {
    title: 'Users',
    component: <User />,
    navelink: '/apps/user'

  },
  {
    title: 'Products',
    component: <Products />,
    navelink: '/apps/products'
  }
];
