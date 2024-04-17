import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/basic/HomePage";
import AboutPage from "./pages/basic/AboutPage";
import NavigationBar from "./componets/NavigationBar";
import RootLayout from "./componets/Root";
import PageNotFound from "./pages/error/PageNotFound";
import ProductPage from "./pages/products/ProductsPage"

const router = createBrowserRouter([
  {
    path: "/", 
    element: <RootLayout />, 
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/products", element: <ProductPage /> },
    ]
  },
  { path: "/404", element: <AboutPage /> },
])

function App() {
  return <>
    {/* <NavigationBar /> */}
    <RouterProvider router={router} />
  </>;
}

export default App;
