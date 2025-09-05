import "global.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import BoardProvider from "./contexts/BoardProvider.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BoardProvider>
      <App />
    </BoardProvider>
  </StrictMode>,
)
