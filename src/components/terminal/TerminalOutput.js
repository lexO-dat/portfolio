import React from 'react';

function TerminalOutput({ output }) {
  return (
    <div className=" text-sm lg:text-base">
      {output.split('\n').map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}

export default TerminalOutput;
