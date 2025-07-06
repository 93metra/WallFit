import { useState } from 'react';
import './App.css';

function App() {
  const nozzleSizes = [0.2, 0.4, 0.6, 0.8];
  const [selectedNozzle, setSelectedNozzle] = useState(0.4);
  const [desiredWallWidth, setDesiredWallWidth] = useState('');

  const getClosestWallWidth = () => {
    if (!desiredWallWidth || selectedNozzle === 0) return '';
    const desired = parseFloat(desiredWallWidth);
    const passes = Math.round(desired / selectedNozzle);
    const closest = passes * selectedNozzle;
    return closest.toFixed(2);
  };

  return (
    <div className="App">
      <h1>WallFit</h1>

      <div>
        <h2>Select nozzle width:</h2>
        {nozzleSizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedNozzle(size)}
            style={{
              margin: '5px',
              padding: '10px',
              backgroundColor: selectedNozzle === size ? '#4CAF50' : '#e7e7e7',
              color: selectedNozzle === size ? 'white' : 'black'
            }}
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
