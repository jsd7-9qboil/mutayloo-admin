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
    path: "/dashboard/order",
    element: <Layout />,
    children: [
      {
        path: "/dashboard/order",
        element:<Order/>
      }
    ],
  },
  {
    path: "/dashboard/product",
    element: <Layout />,
    children: [
      {
        path: "/dashboard/product",
        element:<Product/>
      }
    ],
  },
  {
    path: "/dashboard/product/edit",
    element: <Layout />,
    children: [
      {
        path: "/dashboard/product/edit",
        element:<EditProduct/>
      }
    ],
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element:<Dashboard/>
      }
    ],
  },
  {
    path: "/dashboard/customer",
    element: <Layout />,
    children: [
      {
        path: "/dashboard/customer",
        element:<Customer/>
      }
    ],
  },

]);

export default router;
