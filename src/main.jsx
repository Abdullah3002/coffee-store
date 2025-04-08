import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () =>
      fetch(
        "https://coffee-store-server-qsqe2uwgr-zubaers-projects.vercel.app/coffee"
      ),
  },
  {
    path: "addcoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "updatecoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) =>
      fetch(
        `https://coffee-store-server-qsqe2uwgr-zubaers-projects.vercel.app/coffee/${params.id}`
      ),
  },
  {
    path: "signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "users",
    element: <Users></Users>,
    loader: () =>
      fetch(
        "https://coffee-store-server-qsqe2uwgr-zubaers-projects.vercel.app/user"
      ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
