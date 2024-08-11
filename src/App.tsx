import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/Root";
import LocalChallenge from "./pages/LocalChallenge";
import ErrorPage from "./pages/Error";
import LoginPage, { loginLoader } from "./pages/Login";
import OnlineChallengePage, { onlineLoader } from "./pages/OnlineChallenge";
import VoidPage from "./pages/Void";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: loginLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/localChallenge",
    element: <LocalChallenge />,
  },
  {
    path: "/onlineChallenge",
    element: <OnlineChallengePage />,
    loader: onlineLoader,
  },
  {
    path: "/void",
    element: <VoidPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
