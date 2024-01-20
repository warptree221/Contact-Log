import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/Layout";
import Details from "./components/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/contact/:id",
    element: <Details />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
