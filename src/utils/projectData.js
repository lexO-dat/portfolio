// Hardcoded data with fallback URLs for when GitHub API is rate limited
const hardcodedCards = [
    {
      url: "/imgs/abstract/1.jpg",
      title: "SLML",
      description: "The SLML project aims to develop an efficient and accessible device for sign language recognition, taking advantage of Raspberry Pi and ESP32-CAM capabilities, using TensorFlow for machine learning recognition.",
      skills: ["Python", "TensorFlow", "OpenCV", "C++"],
      demo: "no",
      info: "no",
      demoUrl: "https://github.com/lexO-dat/SLML",
      id: 1,
    },
    {
      url: "/imgs/abstract/2.jpg",
      title: "CELLM",
      description: "This project is focused on developing an automated system to analyze and create genetic circuits using tools such as CELLO and artificial intelligence.",
      skills: ["Python", "AI", "CELLO", "Genetic Circuits"],
      demo: "no",
      info: "no",
      demoUrl: "https://github.com/lexO-dat/CELLM",
      id: 2,
    },
    {
      url: "/imgs/abstract/3.jpg",
      title: "pparser",
      description: "The main idea of this project is the creation of a good system/package to process PDF files and parse them into LLM ready markdown files for RAG applications.",
      skills: ["Python", "NLP", "PDF Parser", "RAG", "LLM"],
      demo: "no",
      info: "no",
      demoUrl: "https://github.com/lexO-dat/pparser",
      id: 3,
    },
    {
      url: "/imgs/abstract/4.jpg",
      title: "AV Innovate",
      description: "Machine learning music recommender system API for a ticket selling platform made in Python with advanced recommendation algorithms.",
      skills: ["Python", "Go", "Docker", "ML"],
      demo: "no",
      info: "no",
      demoUrl: "https://github.com/lexO-dat/AV_Innovate",
      id: 4,
    },
    {
      url: "/imgs/abstract/5.jpg",
      title: "playground so",
      description: "This project is intended to make a system that renders the hierarchy tree between processes and shows graphically everything related to processes/threads for educational purposes.",
      skills: ["C++", "Docker", "System Programming"],
      demo: "no",
      info: "no",
      demoUrl: "https://github.com/lexO-dat/playground-so",
      id: 5,
    },
    {
      url: "/imgs/abstract/6.jpg",
      title: "Go Email Sender",
      description: "This project offers a Go script for sending emails via SMTP, focusing on Gmail. It's easy to use and allows sending HTML emails with attachments.",
      skills: ["Go", "SMTP", "Email"],
      demo: "no",
      info: "no",
      demoUrl: "https://github.com/lexO-dat/Go-Email-Sender",
      id: 6,
    },
    {
      url: "/imgs/abstract/7.jpg",
      title: "pixelated transform",
      description: "This Python repository implements an image pixelation effect simulating an old screen effect using the PIL library and NumPy for image processing.",
      skills: ["Python", "PIL", "NumPy"],
      demo: "no",
      info: "no",
      demoUrl: "https://github.com/lexO-dat/pixelated_transform",
      id: 7,
    },
    {
      url: "/imgs/abstract/8.jpg",
      title: "weather app",
      description: "A weather application made with React Native to test all the basic functionality of this framework including API integration and mobile design.",
      skills: ["JavaScript", "React Native", "API"],
      demo: "no",
      info: "no",
      demoUrl: "https://github.com/lexO-dat/weather-app",
      id: 8,
    },
  ];

export const getHardcodedProjects = () => {
    return hardcodedCards;
};

export const fetchGitHubProjects = async (username) => {
    try {
        // Add timeout and better error handling
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`, {
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);

        // Check for rate limiting specifically
        if (response.status === 403) {
            console.warn('GitHub API rate limit exceeded, falling back to hardcoded data');
            return getHardcodedProjects();
        }

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // Simplified project mapping without additional API calls to avoid rate limits
        const projects = data
            .filter(repo => repo.description && repo.description.trim() !== '') // Filter out repos without descriptions
            .map(repo => {
            // Use repo.language as fallback for skills
            let skills = [];
            if (repo.language) {
                const languageMap = {
                    'JavaScript': 'JavaScript',
                    'Python': 'Python',
                    'C++': 'C++',
                    'C': 'C',
                    'Go': 'Go',
                    'Java': 'Java',
                    'TypeScript': 'TypeScript',
                    'HTML': 'HTML',
                    'CSS': 'CSS',
                    'Shell': 'Shell',
                    'Dockerfile': 'Docker',
                    'Jupyter Notebook': 'Python'
                };
                
                skills = [languageMap[repo.language] || repo.language];
                
                // Add some educated guesses based on repo name and description
                const name = repo.name.toLowerCase();
                const desc = (repo.description || '').toLowerCase();
                
                if (name.includes('react') || desc.includes('react')) skills.push('React');
                if (name.includes('docker') || desc.includes('docker')) skills.push('Docker');
                if (name.includes('tensorflow') || desc.includes('tensorflow')) skills.push('TensorFlow');
                if (name.includes('opencv') || desc.includes('opencv')) skills.push('OpenCV');
                if (name.includes('node') || desc.includes('nodejs')) skills.push('NodeJS');
                if (desc.includes('api') || desc.includes('rest')) skills.push('API');
                
                // Remove duplicates and limit to 4
                skills = [...new Set(skills)].slice(0, 4);
            }

            return {
                id: repo.id,
                title: repo.name.replace(/[-_]/g, ' '), // Replace hyphens and underscores with spaces
                description: repo.description, // We know this exists due to the filter above
                demoUrl: repo.html_url,
                skills: skills,
                updated_at: repo.updated_at,
                created_at: repo.created_at,
                stars: repo.stargazers_count,
                language: repo.language
            };
        });

        return projects;
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        
        // If it's a network error, timeout, or any other issue, fall back to hardcoded data
        console.warn('Falling back to hardcoded project data');
        return getHardcodedProjects();
    }
};
