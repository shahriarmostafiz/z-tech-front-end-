import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../MainLayOut/MainLayOut';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AddProduct from '../Pages/AddProduct/AddProduct';
import MyCart from '../Pages/MyCart/MyCart';

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
            element: <MyCart></MyCart>
        }
        ]
    }
])

export default MainRouter;