import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./styles.css";

const Users = lazy(() => import("./components/Users"));
const UserDetails = lazy(() => import("./components/userDetails"));

const AppLayout = () => (
  <>
    {/* <ScrollRestoration
    getKey={(location, matches) => {
       console.log("location",location)
      }} /> */}
      <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        Component: Users,
      },
      { path: "/users/:id", Component: UserDetails },
    ],
  },
]);

const App = () => {
  return (
    <Suspense fallback={<h1>"Loading..."</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
