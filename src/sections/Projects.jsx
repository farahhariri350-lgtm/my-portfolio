import React, { useState } from 'react';
import './Projects.css';
import FilterBtn from '../components/FilterBtn'; 

import CourseThumbnail from '../assets/Course Website Landing Page Thumbnail 1.svg'; 
import WebDesignGroup from '../assets/Group 33.png';
import UXMobilesGroup from '../assets/Group 1.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'UI', 'UX', 'Web Design'];

  // مصفوفة بيانات المشاريع
  const projectsData = [
    {
      id: 1,
      category: 'UI',
      image: CourseThumbnail,
      title: 'Course Website Landing Page',
    },
   { 
    id: 3, 
    category: 'UX', 
    image: UXMobilesGroup,
    title: 'Mobile App Design' 
  },
    
    { 
    id: 2, 
    category: 'Web Design', 
    image: WebDesignGroup, 
    title: 'Web Design Project' 
  },

  ];


  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section className="projects-section" id="projects">
  
      <div className="center-line"></div>
      
 
      <div className="frame-13">
        
    
        <div className="header-frame-9">
          <h2 className="projects-title">
            My recent <span className="highlight">works</span>
          </h2>

       
          <div className="filter-wrapper">
            {categories.map((cat) => (
              <FilterBtn 
                key={cat}
                label={cat}
                isActive={activeFilter === cat}
                onClick={() => setActiveFilter(cat)}
              />
            ))}
          </div>
        </div>

    
        <div className="frame-12">
          {filteredProjects.map((project) => (
            <div key={project.id} className="placeholder-box">
            
              {project.image ? (
                <div className="card-content-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`project-img-content img-id-${project.id}`} 
                  />
                </div>
              ) : (
             
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>{project.title}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;