import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import PlanPage from "./pages/PlanPage";
import CreatePage from "./pages/CreatePage";
import ContactPage from "./pages/ContactPage";
import SupportPage from "./pages/SupportPage";
import LoginPage from "./pages/LoginPage";
import reportWebVitals from "./setup/reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <App />,
  },
  {
    path: "create",
    element: <CreatePage />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    path: "support",
    element: <SupportPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "plan",
    element: <PlanPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
