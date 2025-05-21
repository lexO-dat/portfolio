import React, { useState, useEffect, useRef } from 'react';
import { motion, useTransform, useScroll } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Cards } from "./Cards";
import { Link } from 'react-router-dom';
import { fetchGitHubProjects } from '../../../utils/projectData';

export const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });

    const [featuredProjects, setFeaturedProjects] = useState([]);
    const [loadingFeatured, setLoadingFeatured] = useState(true);
    const [errorFeatured, setErrorFeatured] = useState(null);

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    useEffect(() => {
        const loadFeaturedProjects = async () => {
            try {
                setLoadingFeatured(true);
                const fetchedProjects = await fetchGitHubProjects('lexO-dat');
                setFeaturedProjects(fetchedProjects.slice(0, 5)); // Get top 5 projects
                setErrorFeatured(null);
            } catch (err) {
                setErrorFeatured(err.message);
                setFeaturedProjects([]);
            } finally {
                setLoadingFeatured(false);
            }
        };
        loadFeaturedProjects();
    }, []);

    let start, end;
    if (isMobile) {
      start = "40%"; // These values might need adjustment if the card layout changes significantly
      end = "-40%"   // Or if the number of cards shown on mobile changes
    } else {
      start = "18%";
      end = "-23%" // Adjusted based on typical viewports for 5 cards
    }
    const x = useTransform(scrollYProgress, [0, 1], [start, end]);

    return (
      <section ref={targetRef} className={`bg-black ${isMobile && !loadingFeatured && !errorFeatured && featuredProjects.length > 0 ? 'h-auto' : ''} ${!isMobile && !loadingFeatured && !errorFeatured && featuredProjects.length > 0 ? 'h-[300vh]' : 'h-auto min-h-screen/2'} pt-16 pb-10`}> {/* Adjust height dynamically */}
        <div className={`lg:ml-20 sticky top-0 flex-col flex items-center overflow-hidden z-10`}>
          <div> 
              <h1 className={`text-2xl lg:text-3xl font-bold text-center ${isMobile ? 'mt-0' : 'mt-4'} lg:mb-10 mb-5 lg:mr-16 text-white`}>Featured Projects:</h1>
          </div>
          
          {loadingFeatured && <p className="text-white text-center text-xl">Loading featured projects...</p>}
          {errorFeatured && <p className="text-red-500 text-center text-xl">Error: {errorFeatured}</p>}
          
          {!loadingFeatured && !errorFeatured && featuredProjects.length === 0 && (
              <p className="text-white text-center text-xl">No featured projects found.</p>
          )}

          {!loadingFeatured && !errorFeatured && featuredProjects.length > 0 && (
            <>
              {isMobile ? (
                <div className="flex flex-col gap-4 p-4 w-full max-w-md"> {/* Added padding and max-width for mobile view */}
                  {featuredProjects.map((project) => {
                    return <Cards card={project} key={project.id} />;
                  })}
                </div>
              ) : (
                <motion.div style={{ x }} className="flex gap-4">
                  {featuredProjects.map((project) => {
                    return <Cards card={project} key={project.id} />;
                  })}
                </motion.div>
              )}
              <div className="bg-white flex items-center justify-center mt-10 sm:mt-16 mb-10"> {/* Adjusted margin-top */}
                <Link to="/projects">
                  <button className="px-4 py-2 font-medium bg-black text-white w-fit transition-all shadow-[3px_3px_0px_black] 
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
