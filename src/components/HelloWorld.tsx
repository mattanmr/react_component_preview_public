const HelloWorld = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Hello World! 👋
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Welcome to React Component Preview
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg text-left">
          <h2 className="font-bold text-blue-800 mb-2">Getting Started:</h2>
          <ul className="text-blue-700 space-y-2">
            <li>✅ Drop your .tsx files in <code className="bg-blue-100 px-2 py-1 rounded">src/components/</code></li>
            <li>✅ They automatically appear in the dropdown</li>
            <li>✅ No configuration needed!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HelloWorld;
