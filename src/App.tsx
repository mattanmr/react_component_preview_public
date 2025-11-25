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
        <div className="fixed top-4 left-4 z-[1000] bg-white/95 dark:bg-gray-800/95 backdrop-blur border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl px-4 py-3 flex flex-col gap-2 w-60">
          <div className="flex items-center justify-between">
            <label htmlFor="component-select" className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              Components
            </label>
            <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400">{componentNames.length}</span>
          </div>
          <select
            id="component-select"
            value={activeComponent}
            onChange={(e) => setActiveComponent(e.target.value)}
            className="text-sm bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer text-gray-800 dark:text-gray-100"
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
