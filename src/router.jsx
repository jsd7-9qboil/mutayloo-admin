import { createBrowserRouter } from "react-router-dom";
// login
import Login from "./pages/auth/Login";
// protected
import ProtectedRoute from "./utils/ProtectedRoute";
// logged in
import Layout from "./pages/Layout";
import Dashboard from "./pages/dashbroards/Dashboard";
import Order from "./pages/orders/Order";
import Product from "./pages/products/Product";
import EditProduct from "./pages/products/EditProduct";
import AddProduct from "./pages/products/AddProduct";
import Users from "./pages/Users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/add",
        element: <AddProduct />,
      },
      {
        path: "product/:id",
        element: <EditProduct />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);

export default router;
