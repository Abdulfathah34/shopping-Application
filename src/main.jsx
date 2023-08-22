import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter>
<Auth0Provider
    domain="dev-1a1v1cp3mchkizku.us.auth0.com"
    clientId="orv8lTLxn1gFGuG0G7PNo102tvpSe1YZ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
   <App></App>
  </Auth0Provider>,
  </BrowserRouter>

    
    
  </React.StrictMode>,
)
