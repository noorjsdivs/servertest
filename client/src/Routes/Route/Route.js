import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home/Home";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import Main from "../../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Login></Login>
            },
            {
                path: '/home',
                element: <PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);