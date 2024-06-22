import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./dashboard/routes/root";
import App from "./App";
import Test from "./components/Test";
// import ErrorPage from "./components/error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />, // Uncomment and use this if you have an ErrorPage component
  },
  {
    path: "/dashboard",
    element: <Root />,
    errorElement: <div>Oops! There was an error.</div>, // This will render on any error in this route
    children: [
      {
        path: "contacts",
        element: <Test />,
        errorElement: <div>Hello! There was an error.</div>, // This will render on any error in this nested route
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
