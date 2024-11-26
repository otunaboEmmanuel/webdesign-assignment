import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import StudentLogin from "./pages/StudentLogin.jsx";
// import StudentPage from "./pages/StudentPage.jsx";
import Dashboard from "./components/Dashboard.jsx";
import AddStudents from "./components/AddStudents.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/adminlogin",
    element: <AdminLogin />,
  },

  {
    path: "/admin",
    element: <AdminPage />,

    children: [
      { index: true, element: <Navigate to="/admin/dashboard" replace /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "addstudents", element: <AddStudents /> },
    ],
  },
  {
    path: "/studentlogin",
    element: <StudentLogin />,
  },
  // {
  //   path: "/student",
  //   element: <StudentPage />,
  // },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
