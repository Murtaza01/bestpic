import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage, { loginLoader } from "./pages/Login";
import RootPage from "./pages/Root";
import ChallengePage from "./pages/Challenge";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
    loader:loginLoader
  },
  {
    path: "/challenge",
    element: <ChallengePage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
