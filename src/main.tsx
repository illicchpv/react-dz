import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import { UserContextProvider } from './context/user.provider';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </StrictMode>
);
