import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement)
const domain = process.env.REACT_APP_DOMAIN
const clientId = process.env.REACT_APP_CLIENT_ID

root.render(
  <React.StrictMode>
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>
  
);