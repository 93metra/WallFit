import React, { useState } from 'react';
import './App.css';

function App() {
  const nozzleSizes = [0.2, 0.4, 0.6, 0.8];
  const [selectedNozzle, setSelectedNozzle] = useState(0.4);
  const [desiredWallWidth, setDesiredWallWidth] = useState('');
  const [theme, setTheme] = useState('dark');

  const getClosestWallWidth = () => {
    if (!desiredWallWidth || selectedNozzle === 0) return '';
    const desired = parseFloat(desiredWallWidth);
    const passes = Math.round(desired / selectedNozzle);
    const closest = passes * selectedNozzle;
    return closest.toFixed(2);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`App ${theme}`}>
      <h1>WallFit</h1>

      <button onClick={toggleTheme} style={{ marginBottom: '20px' }}>
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Theme
      </button>

      <div>
        <h2>Select nozzle width:</h2>
        {nozzleSizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedNozzle(size)}
            className={selectedNozzle === size ? 'active' : ''}
          >
            {size} mm
          </button>
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2>Enter desired wall thickness (mm):</h2>
        <input
          type="number"
          value={desiredWallWidth}
          onChange={(e) => setDesiredWallWidth(e.target.value)}
          placeholder="e.g. 1.5"
          step="0.01"
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2>Closest printable wall thickness:</h2>
        <input
          type="text"
          readOnly
          value={getClosestWallWidth()}
        />
      </div>
    </div>
  );
}

export default App;
