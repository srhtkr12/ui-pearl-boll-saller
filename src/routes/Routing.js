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
import Shipping from '../views/orderView/Shipping';
import TrackOrder from '../views/orderView/TrackOrder';
import Category from '../views/productsView/CategoryPage';
import AllProducts from '../views/productsView/AllProducts';
import ReturnPage from '../views/productsView/ProductReturn';
import OrderDetails from '../views/orderView/OrderDetails';
import OrderHistory from '../views/orderView/OrderHistory';
import ProfileSettings from '../views/usersView/ProfileSettings';
import PaymentSetting from '../views/paymentView/PaymentSetting';
import ProductDetails from '../views/productsView/ProductDetails';
import OrderConfirmation from '../views/orderView/OrderConfirmation';
// Seller
import Seller from '../views/sellerView/Seller'
import Welcome from '../views/sellerView/Welcome'
import AddProduct from '../views/sellerView/AddProduct'
import SellerHome from '../views/sellerView/SellerHome'
import SellerLogin from '../views/sellerView/SellerLogin'
import SellerDetails from '../views/sellerView/SellerDetails'
import SellerPayment from '../views/sellerView/SellerPayment'
import SellerInventory from '../views/sellerView/SellerInventories'
import SellerRegister from '../views/sellerView/SellerRegister'
import SellerProductsDetail from '../views/sellerView/SellerProductsDetail'
// Admin
import Admin from '../views/adminView/Admin'
import Dashboard from '../views/adminView/Dashboard'
import AdminDetails from '../views/adminView/AdminDetails'
import AdminPayment from '../views/adminView/AdminPayments'
import AdminInventory from '../views/adminView/AdminInventory'
// Protected Routes
import { UserProtectedRoute } from './ProtectedRoute';
import { AdminProtectedRoute } from './ProtectedRoute';
import { OrderProtectedRoute } from './ProtectedRoute';
import { SellerProtectedRoute } from './ProtectedRoute';
import { PaymentProtectedRoute } from './ProtectedRoute';

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export const router = createBrowserRouter(
    createRoutesFromElements(

        // <ToastContainer />
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
                {/* Home Pages */}
                <Route index element={<Home />} />
                <Route path='category' element={<Category />} />
                <Route path='apps/product' element={<AllProducts />} />
                <Route path='apps/product/:id' element={<ProductDetails />} />

                {/* Users */}
                <Route path='apps/user' element={<User />} >
                    <Route element={<UserProtectedRoute />} >
                        <Route path='cart' element={<Cart />} />
                        <Route index path='profile' element={<Profile />} />
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
                        <Route path='return' element={<ReturnPage />} />
                        <Route path='details' element={<OrderDetails />} />
                        <Route path='history' element={<OrderHistory />} />
                        <Route path='track-order' element={<TrackOrder />} />
                    </Route>
                </Route>
            </Route>

            {/* Seller */}
            <Route element={<SellerProtectedRoute />} >
                <Route path='apps/seller' element={<Seller />} >
                    <Route index element={<SellerHome />} />
                    <Route path='action' element={<AddProduct />} />
                    <Route path='profile' element={<SellerDetails />} />
                    <Route path='payments' element={<SellerPayment />} />
                    <Route path='inventory' element={<SellerInventory />} />
                    <Route path='inventory/action/:id' element={<AddProduct />} />
                    <Route path='inventory/:id' element={<SellerProductsDetail />} />
                </Route>
            </Route>
            {/* Admin */}
            <Route element={<AdminProtectedRoute />} >
                <Route path='apps/admin' element={<Admin />} >
                    <Route index element={<SellerHome />} />
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='profile' element={<AdminDetails />} />
                    <Route path='payments' element={<AdminPayment />} />
                    <Route path='inventory' element={<AdminInventory />} />
                </Route>
            </Route>
            <Route path='*' element={<PNF />} />
        </Route>
    )
)