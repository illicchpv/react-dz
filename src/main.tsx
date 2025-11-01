import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { UserContextProvider } from './context/user.context';
import App from './App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </StrictMode>
);
