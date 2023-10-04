import { Navigate, createBrowserRouter } from "react-router-dom";

import About from "../pages/About/About";
import AllNews from "../pages/Home/AllNews/AllNews";
import Career from "../pages/Career/Career";
import Category from "../pages/Home/Category/Category";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import LoginLayout from "../Layouts/LoginLayout";
import News from "../pages/News/News";
import NewsLayout from "../Layouts/NewsLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Register from "../pages/Register/Register";
import Root from "../Layouts/Root";
import TermsConditions from "../pages/TermsConditions/TermsConditions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AllNews />,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/category/0",
        element: <AllNews />,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: (
          <PrivateRoute>
            <Career />
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0" />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/terms-conditions",
        element: <TermsConditions />,
      },
    ],
  },

  {
    path: "/",
    element: <NewsLayout />,
    children: [
      {
        path: "/news/:_id",
        element: <News />,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
    ],
  },
]);

export default router;
