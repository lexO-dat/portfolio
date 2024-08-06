# React Terminal Portfolio

This project is a personal portfolio built using React, simulating a bash terminal. The portfolio includes a landing page with static content and a terminal mode where users can interact with the portfolio by typing commands. The terminal allows navigation through folders, listing folder contents, reading files, executing scripts, and more.

## Getting Started

### Prerequisites

- Node.js installed
- npm (Node Package Manager) installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lexO-dat/react-terminal-portfolio.git
   ```
2. Navigate to the project directory:

   ```bash
   cd react-terminal-portfolio
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
### Running the Application
Start the React development server:

  ```bash
  npm start
  ```

Open your browser and visit http://localhost:3000 to view the application.

# Project Structure

This React application follows a modular structure with the following key components and files:

- **`src/App.js`**: Main component defining the routes and structure of the application.

- **`src/index.js`**: Entry point of the application rendering the `App` component.

- **`src/terminal-page/terminal.js`**: Terminal component containing the logic for handling commands, navigation, and displaying terminal interface.

- **`src/components/static/home.js`**: Landing page component with static content.

- **`src/App.css` and `src/terminal-page/terminal.css`**: CSS files for styling.

  # Features

This React terminal portfolio comes with the following key features:

- **Terminal Interface:** Simulates a bash terminal, providing a command-line interface for interaction.

- **Navigation:** Use the `cd` command to navigate through folders within the terminal.

- **Command List:** Type `ls` to list the contents of the current folder, providing an overview of available directories and files.

- **File Reading:** Utilize the `cat` command to read the contents of a specific file, allowing users to access detailed information.

- **Script Execution:** Execute scripts using the `./[script.sh]` command, enabling the running of custom scripts or commands.

- **Help Command:** Type `help` within the terminal to display a list of available commands, providing users with guidance on how to interact with the portfolio.


   
