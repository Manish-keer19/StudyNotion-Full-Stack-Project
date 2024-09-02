import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Signup from "./components/auth/Signup";
import { Toaster } from "react-hot-toast";
import Otp from "./components/auth/Otp";
import Success from "./components/comman/Success";
import Login from "./components/auth/Login";
import ResetPasswordtoken from "./components/auth/ResetPasswordtoken";
import Toast from "./Toast";
import UpdatePassword from "./components/auth/UpdatePassword";
import Success_Password from "./components/auth/Success_Password";
import AboutUs from "./Pages/AboutUs";
import ErrorPage from "./Pages/ErrorPage";
import Profile from "./Pages/Profile";
import PrivateRoute from "./routes/Privateroute";
import Setting from "./components/cor/Profile/Setting";
import AddCourse from "./components/cor/dashboard/addCourse/AddCourse";
import Cart from "./components/cor/dashboard/Cart";
import EnrolledCourses from "./components/cor/dashboard/EnrolledCourses";
import MyCourses from "./components/cor/dashboard/MyCourses";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/Success",
      element: <Success />,
    },
    {
      path: "/otp",
      element: <Otp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/contact",
      element: "",
    },
    {
      path: "/reset-password-Token",
      element: <ResetPasswordtoken />,
    },
    {
      path: "/toast",
      element: <Toast />,
    },
    {
      path: "/update-password/:id",
      element: <UpdatePassword />,
    },
    {
      path: "/success-password",
      element: <Success_Password />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
    {
      path: "/dashboard",
      children: [
        {
          path: "/dashboard/my-profile",
          element: (
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          ),
        },
        {
          path: "/dashboard/setting",
          element: (
            <PrivateRoute>
              <Setting />
            </PrivateRoute>
          ),
        },
        {
          path: "/dashboard/add-course",
          element: (
            <PrivateRoute>
              <AddCourse />
            </PrivateRoute>
          ),
        },
        {
          path: "/dashboard/enrolled-courses",
          element: (
            <PrivateRoute>
              <EnrolledCourses />
            </PrivateRoute>
          ),
        },
        {
          path: "/dashboard/cart",
          element: (
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          ),
        },
        {
          path: "/dashboard/my-courses",
          element: (
            <PrivateRoute>
              <MyCourses />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div className="text-white  min-h-screen bg-richblack-900 flex flex-col font-inter overflow-x-hidden">
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </div>
    </Provider>
  );
}

export default App;
