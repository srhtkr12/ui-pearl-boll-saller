import Home from '../views/Home';
import Login from '../views/Login';
import About from '../views/About';
import Contact from '../views/Contact';
import Layouts from '../layouts/Layouts';
import Register from '../views/Register';
import User from '../views/usersView/User';
import Cart from '../views/productsView/Cart';
import Profile from '../views/usersView/Profile';
import Payment from '../views/paymentView/Payment';
import Addresses from '../views/usersView/Addresses';
import Product from '../views/productsView/Products';
import Checkout from '../views/productsView/Checkout';
import Shipping from '../views/productsView/Shipping';
import TrackOrder from '../views/productsView/TrackOrder';
import Category from '../views/productsView/CategoryPage';
import ProductReturn from '../views/productsView/ProductReturn';
import OrderDetails from '../views/productsView/OrderDetails';
import OrderHistory from '../views/productsView/OrderHistory';
import PaymnetDetails from '../views/paymentView/PaymnetDetails';
import ProfileSettings from '../views/usersView/ProfileSettings';
import PaymentSetting from '../views/paymentView/PaymentSetting';
import ProductDetails from '../views/productsView/ProductDetails';
import OrderConfirmation from '../views/productsView/OrderConfirmation';


export const routes = [
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "user",
                element: <User />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    },
                    {
                        path: "settings",
                        element: <ProfileSettings />
                    },
                    {
                        path: "addresses",
                        element: <Addresses />
                    }
                ]
            },
            {
                path: "product",
                element: <Product />,
                children: [
                    {
                        path: "details",
                        element: <ProductDetails />
                    },
                    {
                        path: "category",
                        element: <Category />
                    },
                    {
                        path: "cart",
                        element: <Cart />
                    },
                    {
                        path: "checkout",
                        element: <Checkout />
                    },
                    {
                        path: "return",
                        element: <ProductReturn />
                    }
                ]
            },
            {
                path: "order",
                element: <OrderConfirmation />,
                children: [
                    {
                        path: "shipping",
                        element: <Shipping />
                    },
                    {
                        path: "details",
                        element: <OrderDetails />
                    },
                    {
                        path: "history",
                        element: <OrderHistory />
                    },
                    {
                        path: "tracking",
                        element: <TrackOrder />
                    }
                ]
            },
            {
                path: "payment",
                element: <Payment />,
                children: [
                    {
                        path: "settings",
                        element: <PaymentSetting />
                    },
                    {
                        path: "details",
                        element: <PaymnetDetails />
                    }
                ]
            },

        ]
    }
]