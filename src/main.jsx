import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-83f0ucnyckbcbk6r.us.auth0.com"
    clientId="kNNy4nQYZ2YzhKPG9NRN7NPQ6oRcO6r9"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
)
