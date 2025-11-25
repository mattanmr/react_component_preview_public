import { lazy } from 'react';

// Automatically import all components from the components folder
// Using Vite's glob import feature
const componentModules = import.meta.glob('./components/*.tsx');

// Create a map of component names to lazy-loaded components
export const componentMap: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {};

Object.keys(componentModules).forEach((path) => {
  // Extract component name from path
  // e.g., './components/Presentation.tsx' -> 'Presentation'
  const match = path.match(/\.\/components\/(.+)\.tsx$/);
  if (match) {
    const componentName = match[1];
    // Skip backup files or files starting with underscore
    if (!componentName.includes('.backup') && !componentName.startsWith('_')) {
      componentMap[componentName] = lazy(() => 
        componentModules[path]().then((module: any) => ({
          default: module.default
        }))
      );
    }
  }
});

// Get sorted list of component names
export const getComponentNames = (): string[] => {
  return Object.keys(componentMap).sort();
};
