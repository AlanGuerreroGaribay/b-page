import React from "react";
import ReactDOM from "react-dom/client";
import RouterProviderApp from "./Routes/RouteProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProviderApp />
  </React.StrictMode>
);
