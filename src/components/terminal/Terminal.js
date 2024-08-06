import React, { useEffect, useRef } from 'react';
import TerminalOutput from './TerminalOutput';
import TerminalInput from './TerminalInput';
import useTerminalLogic from './useTerminalLogic';
import TerminalWindow from './TerminalWindow';
import IconSideNav from '../Navbar/Navbar';

function Terminal() {
  const { currentFolder, output, input, setInput, handleCommand } = useTerminalLogic();
  const inputRef = useRef();
  const bottomRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [output]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center" onClick={focusInput}>
      <IconSideNav />
      <TerminalWindow>
        <div className="text-sm lg:text-base">
          <p>Hi! I'm Lucas Abello and this is my interactive portfolio</p>
          <p>---------------------------------------------------------</p>
          <p>Use the command <span className='text-md'>help</span> to see all the commands you can use</p>
        </div>
        <TerminalOutput output={output} />
        <div ref={bottomRef} />
        <TerminalInput
          inputRef={inputRef}
          input={input}
          setInput={setInput}
          currentFolder={currentFolder}
          handleCommand={handleCommand}
        />
      </TerminalWindow>
    </div>
  );
}

export default Terminal;
