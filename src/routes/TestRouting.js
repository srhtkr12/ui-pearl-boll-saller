import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import PNF from '../views/PNF'
import Home from '../views/Home';
import Login from '../views/Login';
import About from '../views/About';
import Contact from '../views/Contact';
import Layouts from '../layouts/Layouts';
import Register from '../views/Register';
import User from '../views/usersView/User';
import Cart from '../views/usersView/Cart';
import Profile from '../views/usersView/Profile';
import Addresses from '../views/paymentView/Addresses';
import Checkout from '../views/paymentView/Checkout';
import PayMethods from '../views/paymentView/PaymentMode';
import Shipping from '../views/productsView/Shipping';
import TrackOrder from '../views/productsView/TrackOrder';
import Category from '../views/productsView/CategoryPage';
import AllProducts from '../views/productsView/AllProducts';
import ReturnPage from '../views/productsView/ProductReturn';
import OrderDetails from '../views/productsView/OrderDetails';
import OrderHistory from '../views/productsView/OrderHistory';
import ProfileSettings from '../views/usersView/ProfileSettings';
import PaymentSetting from '../views/paymentView/PaymentSetting';
import ProductDetails from '../views/productsView/ProductDetails';
import OrderConfirmation from '../views/productsView/OrderConfirmation';

import Seller from '../views/sellerView/Seller'
import Welcome from '../views/sellerView/Welcome'
import AddProduct from '../views/sellerView/AddProduct'
import SellerHome from '../views/sellerView/SellerHome'
import SellerLogin from '../views/sellerView/SellerLogin'
import SellerDetails from '../views/sellerView/SellerDetails'
import SellerPayment from '../views/sellerView/SellerPayment'
import SellerProducts from '../views/sellerView/SellerProducts'
import SellerRegister from '../views/sellerView/SellerRegister'

// Protected Routes
import { UserProtectedRoute } from './ProtectedRoute';
import { OrderProtectedRoute } from './ProtectedRoute';
import { SellerProtectedRoute } from './ProtectedRoute';
import { PaymentProtectedRoute } from './ProtectedRoute';

export const testrouter = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            {/* Default Pages */}
            <Route path='login' element={<Login />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='register' element={<Register />} />

            <Route path='seller' element={<Welcome />} >
                <Route path='login' element={<SellerLogin />} exact />
                <Route path='register' element={<SellerRegister />} />
            </Route>

            <Route path='/' element={<Layouts />}>
                <Route index element={<Home />} />
                <Route path='category' element={<Category />} />
                <Route path='apps/product' element={<AllProducts />} />
                <Route path='details/:id' element={<ProductDetails />} />

                {/* Users */}
                <Route path='apps/user' element={<User />} >
                    <Route element={<UserProtectedRoute />} >
                        <Route path='cart' element={<Cart />} />
                        <Route path='profile' element={<Profile />} />
                        <Route path='addresses' element={<Addresses />} />
                        <Route path='settings' element={<ProfileSettings />} />
                    </Route>
                    <Route path='checkout' element={<PaymentProtectedRoute />}>
                        <Route index element={<Checkout />} />
                        <Route path='paymentmod' element={<PayMethods />} />
                        <Route path='payment-setting' element={<PaymentSetting />} />
                    </Route>
                    <Route path='orders' element={<OrderProtectedRoute />}>
                        <Route index path='confirmation' element={<OrderConfirmation />} />
                        <Route path='shipping' element={<Shipping />} />
                        <Route path='track-order' element={<TrackOrder />} />
                        <Route path='return' element={<ReturnPage />} />
                        <Route path='details' element={<OrderDetails />} />
                        <Route path='history' element={<OrderHistory />} />
                    </Route>
                </Route>
            </Route>
            <Route path='apps/seller' element={<Seller />} >
                <Route element={<SellerProtectedRoute />} >
                    <Route path='home' element={<SellerHome />} exact />
                    <Route path='add' element={<AddProduct />} />
                    <Route path='details' element={<SellerDetails />} />
                    <Route path='payments' element={<SellerPayment />} />
                    <Route path='products' element={<SellerProducts />} />
                </Route>
            </Route>
            <Route path='*' element={<PNF />} />
        </Route>
    )
)