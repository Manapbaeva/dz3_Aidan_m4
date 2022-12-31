import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Count: {count}
            </button>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      <Counter />
  </React.StrictMode>
);

