import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

// This automatically detects if you are running locally or building for production
const baseName = import.meta.env.MODE === 'production' ? '/daily-news-react' : '';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={baseName}>
      <App />
    </BrowserRouter>
  </StrictMode>
)