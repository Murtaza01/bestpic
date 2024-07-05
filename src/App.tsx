import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/Login";
import RootPage from "./pages/Root";
import MvsFPage from "./pages/MvsF";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/mohamed-vs-fatima",
    element: <MvsFPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
