import React from 'react';
import { createRoot } from 'react-dom/client';
import Registration from './components/Registration';
import './style.css';

const App = () => {
  return (
    <div className="container">
      
      <main>
        <Registration />
      </main>
     
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
