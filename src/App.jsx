import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Home/Home.jsx";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",element: <Layout />,children: [
      {index: true,element: <Home />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
