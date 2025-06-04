import React, { useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive";
import { Cards } from "./Cards";
import { Link } from 'react-router-dom';
import { fetchGitHubProjects } from '../../../utils/projectData';

const SELECTED_PROJECTS = [
  'CELLM',
  'pparser', 
  'SLML',
  'playground so',
  'Go Email Sender',
  'pixelated transform'
];

const FeaturedProjects = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loadingFeatured, setLoadingFeatured] = useState(true);
  const [errorFeatured, setErrorFeatured] = useState(null);

  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  useEffect(() => {
    const loadFeaturedProjects = async () => {
      try {
        setLoadingFeatured(true);
        setErrorFeatured(null);
        
        const fetchedProjects = await fetchGitHubProjects('lexO-dat');
        
        // Filter projects to only include selected ones and maintain order
        const selectedProjects = SELECTED_PROJECTS.map(projectName => 
          fetchedProjects.find(project => {
            const projectTitle = project.title.toLowerCase();
            const projectName_lower = projectName.toLowerCase();
            
            return (
              projectTitle.replace(/\s+/g, '-') === projectName_lower ||
              projectTitle.replace(/\s+/g, '_') === projectName_lower ||
              projectTitle === projectName_lower ||
              projectTitle.replace(/\s+/g, '') === projectName_lower.replace(/[-_]/g, '')
            );
          })
        ).filter(Boolean);
        
        // If we couldn't find enough projects, pad with remaining fetched projects
        if (selectedProjects.length < 6) {
          const remainingProjects = fetchedProjects
            .filter(project => !selectedProjects.find(selected => selected.id === project.id))
            .slice(0, 6 - selectedProjects.length);
          selectedProjects.push(...remainingProjects);
        }
        
        setFeaturedProjects(selectedProjects.slice(0, 6)); // Ensure max 6 projects
        
        // Show success message if using fallback data
        if (fetchedProjects.length > 0 && fetchedProjects[0].id <= 7) {
          console.log('Using fallback project data due to API limitations');
        }
        
      } catch (err) {
        console.error('Failed to load projects:', err);
        setErrorFeatured('Unable to load projects. Please try again later.');
        setFeaturedProjects([]);
      } finally {
        setLoadingFeatured(false);
      }
    };
    
    loadFeaturedProjects();
  }, []);

  return (
    <section className="bg-black min-h-screen pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Featured Projects:
          </h1>
        </div>
        
        {loadingFeatured && (
          <div className="flex justify-center items-center h-64">
            <p className="text-white text-center text-xl">Loading featured projects...</p>
          </div>
        )}
        
        {errorFeatured && (
          <div className="flex justify-center items-center h-64">
            <p className="text-red-500 text-center text-xl">Error: {errorFeatured}</p>
          </div>
        )}
        
        {!loadingFeatured && !errorFeatured && featuredProjects.length === 0 && (
          <div className="flex justify-center items-center h-64">
            <p className="text-white text-center text-xl">No featured projects found.</p>
          </div>
        )}

        {!loadingFeatured && !errorFeatured && featuredProjects.length > 0 && (
          <>
            <div className={`grid gap-6 justify-items-center ${
              isMobile 
                ? 'grid-cols-1 max-w-md mx-auto' 
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto'
            }`}>
              {featuredProjects.map((project) => (
                <Cards card={project} key={project.id} />
              ))}
            </div>
            
            <div className="flex items-center justify-center mt-16">
              <Link to="/projects">
                <button className="px-6 py-3 font-medium bg-black text-white transition-all shadow-[3px_3px_0px_white] 
                                   hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] border-2 border-white">
                    See all my projects
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;