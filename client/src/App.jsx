import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
