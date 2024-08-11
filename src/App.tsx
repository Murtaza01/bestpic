import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage, { loginLoader } from "./pages/Login";
import RootPage from "./pages/Root";
import LocalChallenge from "./pages/LocalChallenge";
import ErrorPage from "./pages/Error";
import OnlineChallengePage, { onlineLoader } from "./pages/OnlineChallnege";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: loginLoader,
    errorElement: <ErrorPage />
  },
  {
    path: "/localChallenge",
    element: <LocalChallenge />,
  },
  {
    path:"/onlineChallenge",
    element:<OnlineChallengePage />,
    loader:onlineLoader
  },
  {
    path:"/error",
    element: <ErrorPage />,
  }


]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
