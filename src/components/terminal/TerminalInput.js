import React from 'react';

function TerminalInput({ inputRef, input, setInput, currentFolder, handleCommand }) {
  return (
    <div className="text-sm lg:text-base">
      lucas@portfolio: {currentFolder}${' '}
      <span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="bg-transparent border-none outline-none text-white caret-white"
        />
      </span>
    </div>
  );
}

export default TerminalInput;
