import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './components/shared/shared.css';
import App from './App.jsx';
import { PlayerProvider } from './context/PlayerContext.jsx';
import { LanguageProvider } from './i18n/LanguageContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <PlayerProvider>
          <App />
        </PlayerProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
