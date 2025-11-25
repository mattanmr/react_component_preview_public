import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Interactive Counter
        </h1>
        
        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <div className="text-8xl font-bold text-blue-600 mb-4">
            {count}
          </div>
          <p className="text-gray-600">Current Count</p>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setCount(count - 1)}
            className="px-8 py-4 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            - Decrease
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-8 py-4 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Reset
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            + Increase
          </button>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          This is an example interactive component demonstrating state management
        </div>
      </div>
    </div>
  );
};

export default Counter;
