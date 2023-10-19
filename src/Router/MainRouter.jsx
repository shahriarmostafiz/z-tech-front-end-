import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../MainLayOut/MainLayOut';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AddProduct from '../Pages/AddProduct/AddProduct';
import MyCart from '../Pages/MyCart/MyCart';
import Products from '../Pages/Products/Products';
import Details from '../Pages/Details/Details';
import PrivateRoute from './PrivateRoute';
import UpdateProduct from '../Pages/UpdateProduct/UpdateProduct';

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [{
            path: '/',
            element: <Home></Home>
        }, {
            path: '/login',
            element: <Login></Login>
        }, {
            path: '/signup',
            element: <Register></Register>
        },
        {
            path: "/addProduct",
            element: <PrivateRoute>
                <AddProduct></AddProduct>
            </PrivateRoute>
        }, {
            path: "/myCart",
            element: <PrivateRoute>
                <MyCart></MyCart>
            </PrivateRoute>
        }, {
            path: "/products/:brand",
            element: <Products></Products>,
            loader: ({ params }) => fetch(`https://z-tech-server.vercel.app/products/${params.brand}`)
        }, {
            path: "/details/:id",
            element: <PrivateRoute>
                <Details></Details>
            </PrivateRoute>,
            loader: ({ params }) => fetch(`https://z-tech-server.vercel.app/products/details/${params.id}`)
        }, {
            path: "/update/:id",
            element: <PrivateRoute>
                <UpdateProduct></UpdateProduct>
            </PrivateRoute>,
            loader: ({ params }) => fetch(`https://z-tech-server.vercel.app/products/details/${params.id}`)
        }
        ]
    }
])

export default MainRouter;