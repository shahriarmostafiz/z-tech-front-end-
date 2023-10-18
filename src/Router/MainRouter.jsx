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
            element: <AddProduct></AddProduct>
        }, {
            path: "/myCart",
            element: <PrivateRoute>
                <MyCart></MyCart>
            </PrivateRoute>
        }, {
            path: "/products/:brand",
            element: <Products></Products>,
            loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brand}`)
        }, {
            path: "/details/:id",
            element: <Details></Details>,
            loader: ({ params }) => fetch(`http://localhost:5000/products/details/${params.id}`)
        }
        ]
    }
])

export default MainRouter;