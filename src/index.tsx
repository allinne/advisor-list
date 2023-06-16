import React from 'react';
import { createRoot } from "react-dom/client";
import App from './components/App';

const container = document.getElementById("app") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App initialData={(window as any).initialData} />
  </React.StrictMode>
);
