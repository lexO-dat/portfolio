# Personal Portfolio

This project is a personal portfolio built using React. The portfolio features a modern, responsive design with multiple pages showcasing projects, resume, and contact information. It includes dynamic project loading from GitHub API with fallback data and an integrated contact form across all pages.

## Getting Started

### Prerequisites

- Node.js installed
- npm (Node Package Manager) installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lexO-dat/portfolio.git
   ```
2. Navigate to the project directory:

   ```bash
   cd portfolio
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

## Project Structure

This React application follows a modular structure with the following key components and directories:

- **`src/App.js`**: Main component defining the routes and structure of the application.

- **`src/index.js`**: Entry point of the application rendering the App component.

- **`src/components/`**: Contains all React components organized by functionality:
  - **`Home/`**: Landing page component with hero section and featured content
  - **`Projects/`**: Project showcase components including featured projects and project cards
  - **`Contact/`**: Contact form component and dedicated contact page
  - **`Navbar/`**: Navigation sidebar component
  - **`Resume.js`**: Resume/CV page component

- **`src/utils/`**: Utility functions and data:
  - **`projectData.js`**: GitHub API integration and hardcoded project fallback data

- **`src/data/`**: Static data files for portfolio content

- **`public/`**: Static assets including images and PDF resume

## Features

This modern React portfolio includes the following key features:

- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices

- **Dynamic Project Loading**: Automatically fetches projects from GitHub API with fallback to hardcoded data

- **Multi-page Navigation**: Clean navigation between Home, Projects, Resume, and Contact pages

- **PDF Resume**: Downloadable PDF resume with inline viewing option

- **Smooth Transitions**: Page transitions with automatic scroll-to-top functionality

- **GitHub Integration**: Real-time project data fetching with rate limit handling

- **Mobile Optimization**: Touch-friendly interface with optimized layouts for mobile devices

## Technologies Used

- React 18
- React Router DOM for navigation
- Tailwind CSS for styling
- React Icons for iconography
- GitHub API for dynamic content



