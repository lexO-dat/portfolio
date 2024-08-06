import React from 'react';

function TerminalWindow({ children }) {
  return (
    <div className="w-4/5 max-w-4xl mx-auto bg-black border-white border-2 text-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gray-800 flex items-center justify-between p-2 border-b border-gray-800 border-2">
        <div className="flex gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <div className="text-gray-400 text-sm mr-12">Terminal</div>
        <div></div>
      </div>
      <div className="p-4 h-128 overflow-y-auto bg-gray-900">
        {children}
      </div>
    </div>
  );
}

export default TerminalWindow;
