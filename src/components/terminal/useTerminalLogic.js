import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useTerminalLogic() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [currentFolder, setCurrentFolder] = useState('~');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const navigate = useNavigate();

  const listContents = (folder) => {
    switch (folder) {
      case '~':
        return '\n about/ hobbies/ projects/ contact/ README.md ???/';
      case '~/projects':
        return '\n JsDonnut/ FlowFields/';
      case '~/projects/JsDonnut':
        return '\n jsdon.txt jsrepository.sh';
      case '~/projects/FlowFields':
        return '\n flowfield.txt flowrepository.sh';
      case '~/about':
        return '\n about_me.txt';
      case '~/hobbies':
        return '\n hobbies.txt';
      case '~/contact':
        return '\n social_media.txt mail.sh';
      case '~/???':
        return '\n the content of this folder is on the way';
      default:
        return '\n This folder is empty';
    }
  };

  const readFileContents = (fileName, currentFolder) => {
    if (currentFolder === '~/about' && fileName === 'about_me.txt') {
      return '\n ------------------------------------ \n I am a computer engineering student with a passion for technology since my childhood. I have actively participated in numerous competitive programming events, such as Ieeextreme, Python Generative AI Hackathon and the ICPC and the AV Innovate demonstrating a satisfactory performance both as a team player and as an individual. \n \n I have worked on personal projects as a backend developer. However, my main interest lies in expanding my skills in software development and cybersecurity.\n \n ------------------------------------ \n';
    } else if (currentFolder === '~/hobbies' && fileName === 'hobbies.txt') {
      return '\n ------------------------------------ \n One of my biggest hobbies since many years ago is music, I am a bass player in a band and I play guitar in my free time, I also like to do all kind of electronic circuits design of synthesizers to make music with them at some point. \n \n When I was a kid I used to take apart all my electronic toys to know how they worked inside (and I was also one of those who later didnt know how to put them together) in order to learn how things work inside. Thanks to that I was able to win first place for several years in science fairs or robotics competitions at school and electronics has remained a hobby ever since. \n \n Currently the hobby to which I dedicate more time is programming, Im constantly watching videos, reading blogs or even reading books to improve my programming techniques and expand my knowledge in the areas that I like. \n \n ------------------------------------ \n';
    } else if (currentFolder === '~/projects/JsDonnut' && fileName === 'jsdon.txt') {
      return '\n ------------------------------------ \n This project is my version of the famous animation of the spinning donut, to achieve it I based on all the information that was in the blog of a1k0n (link below) where he explained the mathematics behind this animation, and understanding that was only pass the ideas to javascript and run the code. One of the parts that cost me the most were the lighting simulation using characters and the Optimization with Z-Buffering (I think the optimization was the most complex part to achieve). \n \n If you want to see the code go to the github repository here (also if you execute the .sh file you will be automatically redirected): https://github.com/lexO-dat/JsDonnut \n If you want to see the a1k0n blog go to this link: https://www.a1k0n.net/2011/07/20/donut-math.html \n ------------------------------------ \n';
    } else if (currentFolder === '~/projects/FlowFields' && fileName === 'flowfield.txt') {
      return '\n ------------------------------------ \n This project, done in JavaScript, focuses on animating particles following a vector field on an HTML5 canvas. The main complexity lies in dynamically generating the vector field and handling particles with a motion history achieved by an algorithm that detects the particles position and the angle of the vector at that position. The distinctive feature that I am working to achieve is real-time interactivity, allowing live adjustments of parameters such as zoom and vector field curve during execution, as well as being an importable React module. \n \n If you want to see the code go to the github repository here (also if you execute the .sh file you will be automatically redirected): https://github.com/lexO-dat/FlowFieldsProject \n ------------------------------------ \n';
    } else if (currentFolder === '~/contact' && fileName === 'social_media.txt') {
      return '\n ------------------------------------ \n Github: https://github.com/lexO-dat/ \n LinkedIn: https://www.linkedin.com/in/lucasabello/ \n Instagram: https://www.instagram.com/_lexx_abb_/ \n ------------------------------------ \n';
    } else if (currentFolder === '~' && fileName === 'README.md') {
      return '\n ------------------------------------ \n Welcome to my terminal portfolio!, if you want to execute a .sh file you have to add ./ before the name of the file. \n ------------------------------------ \n';
    } else {
      return '\n Invalid file';
    }
  };

  const handleExitCommand = () => {
    navigate('/');
  };

  const extractTargetFolder = (input) => {
    const cdRegex = /^cd\s+(\S+)/;
    const match = input.match(cdRegex);
    return match ? match[1] : null;
  };

  const changeDirectory = (targetFolder, currentFolder) => {
    const folderStructure = {
      '~': {
        projects: 'projects',
        hobbies: 'hobbies',
        about: 'about',
        contact: 'contact',
        '???': '???',
      },
      '~/projects': {
        JsDonnut: 'JsDonnut',
        FlowFields: 'FlowFields',
      },
      '~/projects/JsDonnut': {},
      '~/projects/FlowFields': {},
      '~/about': {},
      '~/hobbies': {},
      '~/contact': {},
      '~/???': {},
    };

    if (targetFolder === '..') {
      const folders = currentFolder.split('/');
      const parentFolder = folders.slice(0, -1).join('/') || '~';
      return parentFolder;
    }

    const newFolderPath = `${currentFolder}/${targetFolder}`;
    if (folderStructure[currentFolder] && folderStructure[currentFolder][targetFolder]) {
      return newFolderPath;
    } else {
      return currentFolder;
    }
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      let newOutput = output + `\n lucas@portfolio: ${currentFolder}$ ${input}`;
      const [command, ...args] = input.split(' ');

      switch (command) {
        case 'help':
          newOutput += '\n here are the commands you can use: \n ------------------------------------ \n cd [name of the folder]: enter to the specified folder \n cd ..: go back to the previous folder \n ls: list all the folders on the actual position \n clear: clears the console \n cat: read a .txt or a md file on the console\n ./[name.sh]: execute a .sh file \n exit: go back to the main (static) page \n ------------------------------------ \n';
          break;
        case 'cd':
          const targetFolder = extractTargetFolder(input);
          if (targetFolder) {
            setCurrentFolder(changeDirectory(targetFolder, currentFolder));
          } else {
            newOutput += '\n Invalid cd command';
          }
          break;
        case 'ls':
          newOutput += listContents(currentFolder);
          break;
        case 'clear':
          newOutput = '';
          break;
        case 'exit':
          handleExitCommand();
          break;
        case 'cat':
          const fileName = args[0];
          if (fileName) {
            newOutput += readFileContents(fileName, currentFolder);
          } else {
            newOutput += '\n Invalid cat command';
          }
          break;
        case './jsrepository.sh':
          window.open('https://github.com/lexO-dat/JsDonnut');
          newOutput += '\n redirecting...';
          newOutput += '\n ok.';
          break;
        case './flowrepository.sh':
          window.open('https://github.com/lexO-dat/FlowFieldsProject');
          newOutput += '\n redirecting...';
          newOutput += '\n ok.';
          break;
        case './mail.sh':
          window.open('mailto:lucas.abello@mail.udp.cl');
          newOutput += '\n redirecting... if doesnt work mail me to lucas.abello@mail.udp.cl.';
          break;
        default:
          newOutput += `\n Command not found: ${input}`;
          break;
      }

      setOutput(newOutput);
      setInput('');
      setCommandHistory((prevHistory) => [input, ...prevHistory]);
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      const direction = e.key === 'ArrowUp' ? 1 : -1;
      const newIndex = historyIndex + direction;
      if (newIndex >= 0 && newIndex < commandHistory.length) {
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else if (newIndex === -1) {
        setHistoryIndex(newIndex);
        setInput('');
      }
    }
  };

  return {
    currentFolder,
    output,
    input,
    setInput,
    handleCommand,
  };
}

export default useTerminalLogic;
