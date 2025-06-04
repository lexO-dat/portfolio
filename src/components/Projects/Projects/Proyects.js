import React, { useState, useEffect } from 'react';
import { Cards } from '../FeaturedProjects/Cards';
import { fetchGitHubProjects } from '../../../utils/projectData';

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                setLoading(true);
                const fetchedProjects = await fetchGitHubProjects('lexO-dat');
                setProjects(fetchedProjects);
                setError(null);
            } catch (err) {
                setError(err.message);
                setProjects([]); // Clear projects on error
            } finally {
                setLoading(false);
            }
        };
        loadProjects();
    }, []); // Empty dependency array to run once on mount

    return (
        <section className="h-auto min-h-screen bg-black pb-28 mt-10">
          <div className="lg:ml-20 flex flex-col items-center overflow-hidden z-10">
            <div> 
                <h1 className={`text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 lg:mr-16 text-white`}>Projects and Experiments</h1>
            </div>
            {loading && <p className="text-white text-center text-xl">Loading projects...</p>}
            {error && <p className="text-red-500 text-center text-xl">Error: {error}</p>}
            {!loading && !error && (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-4 w-full max-w-6xl'>
                  {projects.map((project) => {
                    return <Cards card={project} key={project.id} />;
                  })}
                </div>
            )}
            {!loading && !error && projects.length === 0 && (
                <p className="text-white text-center text-xl">No projects found.</p>
            )}
          </div>
        </section>
      );
}

export default ProjectsPage;
