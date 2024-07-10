import { createBrowserRouter } from "react-router-dom";
// layout
import Layout from "./pages/Layout";
import Order from "./pages/orders/Order";
// pages

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element:<Order/>
      }
    ],
  },
]);

export default router;
