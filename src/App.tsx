import React from 'react';

import './App.css';

function App() {
  const addNumber = (a: number, b: number) => {
    console.log(a + b);
  };

  return (
    <div className="App">
      <button onClick={() => addNumber(2, 3)}>클릭</button>
    </div>
  );
}

export default App;
