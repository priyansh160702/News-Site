import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "join", element: <Join /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
