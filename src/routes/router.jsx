import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/jobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>Route not found</h2>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: "/jobApply/:id",
          element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
        },
        {
          path: '/myApplications',
          element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>,
        },
        {
          path: '/jobs/:id',
          element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5001/jobs/${params.id}`)
        },
        {
            path: 'register',
            element: <Register></Register>,
        },
        {
          path:'signIn',
          element: <SignIn></SignIn>,
        },
      ]
    },
  ]);

  export default router;