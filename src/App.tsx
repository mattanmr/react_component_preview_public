import { useState, Suspense } from 'react';
import { componentMap, getComponentNames } from './componentLoader';

function App() {
  const componentNames = getComponentNames();
  
  // Default to the first available component
  const [activeComponent, setActiveComponent] = useState<string>(
    componentNames.length > 0 ? componentNames[0] : ''
  );
  
  const ActiveComponent = componentMap[activeComponent];

  return (
    <div>
      {/* Component Switcher - only show if there are multiple components */}
      {componentNames.length > 1 && (
        <div style={{
          position: 'fixed',
          top: '10px',
          left: '10px',
          zIndex: 1000,
          background: 'white',
          padding: '10px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <label htmlFor="component-select" style={{ marginRight: '8px', fontWeight: 'bold' }}>
            Component:
          </label>
          <select
            id="component-select"
            value={activeComponent}
            onChange={(e) => setActiveComponent(e.target.value)}
            style={{
              padding: '5px 10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              cursor: 'pointer'
            }}
          >
            {componentNames.map(name => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>
      )}
      
      {/* Render the active component */}
      <Suspense fallback={
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '24px',
          color: '#666'
        }}>
          Loading component...
        </div>
      }>
        {ActiveComponent && <ActiveComponent />}
      </Suspense>
    </div>
  );
}

export default App;
