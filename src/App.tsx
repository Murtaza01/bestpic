import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/Login";
import RootPage from "./pages/Root";
import MvsFPage from "./pages/MvsF";
import Test from "./pages/Test";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/test/login",
    element: <LoginPage />,
  },
  {
    path: "/test/mohamed-vs-fatima",
    element: <MvsFPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
