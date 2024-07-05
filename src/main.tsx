import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./app/store";
// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    {/* <QueryClientProvider client={queryClient}> */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
    {/* </QueryClientProvider> */}
  </Provider>,
);
