import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { UserContextProvider } from './context/user.context';
// import App from './App.jsx';
// import {UserContextProvider} from './context/user.context.jsx';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <UserContextProvider>
      <p>ыыыы</p>
      {/* <App /> */}
    </UserContextProvider>
  </StrictMode>
);
