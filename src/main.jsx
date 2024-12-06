import { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardBody from "./components/pages/dashboard/dashboard-body.jsx";
import { createRoot } from "react-dom/client";
import GeneratedReport from "./components/pages/generatedReport/generatedReport.jsx";
import UploadPage from "./components/pages/uploadFiles/uploadFiles.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <DashboardBody />,
      },
      {
        path: "/upload-files",
        element: <UploadPage />,
      },
      {
        path: "/generatedReport",
        element: <GeneratedReport />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
