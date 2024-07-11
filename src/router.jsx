import { createBrowserRouter } from "react-router-dom";
// layout
import Layout from "./pages/Layout";
import Order from "./pages/orders/Order";
import Product from "./pages/products/Product";
import Dashboard from "./pages/dashbroards/Dashboard";
import EditProduct from "./pages/products/EditProduct";
import Customer from "./pages/customers/Customer";

// pages

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
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
        path: "/product/edit",
        element: <EditProduct />,
      },
      {
        path: "/customer",
        element: <Customer />,
      },
    ],
  },
]);

export default router;
