import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ClerkProvider } from '@clerk/clerk-react'
// Import your publishable key
const clerkPublishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!clerkPublishableKey) {
  throw new Error('Missing REACT_APP_CLERK_PUBLISHABLE_KEY environment variable');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ClerkProvider publishableKey={clerkPublishableKey}>
      <App />
    </ClerkProvider>

  </React.StrictMode>
);
