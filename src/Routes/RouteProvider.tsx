import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App/screens/App";
import Dashboard from "../Dashboard/screens/Dashboard";
import Home from "../Home/screens/Home";
import Neighbors from "../Neighbors/screens/Neighbors";
import Reports from "../Reports/screen/Reports";
import Payments from "../Payments/screen/Payments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/Home",
        element: <Home />,
      },
      {
        path: "/dashboard/Neighbors",
        element: <Neighbors />,
      },
      {
        path: "/dashboard/Reports",
        element: <Reports />,
      },
      {
        path: "/dashboard/Payments",
        element: <Payments />,
      },
    ],
  },
]);

const RouterProviderApp = () => {
  return <RouterProvider router={router} />;
};

export default RouterProviderApp;
