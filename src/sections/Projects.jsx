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
    image: UXMobilesGroup, // صورة الموبايلات الثلاثة
    title: 'Mobile App Design' 
  },
    
    { 
    id: 2, 
    category: 'Web Design', 
    image: WebDesignGroup, // الصورة الكاملة للابتوب والجرافيك
    title: 'Web Design Project' 
  },
    // يمكنك إضافة الـ 6 مشاريع هنا بنفس الطريقة
  ];

  // منطق الفلترة: يعرض الكل أو يصنف حسب الفئة المختارة
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section className="projects-section" id="projects">
      {/* الخط العمودي الخلفي */}
      <div className="center-line"></div>
      
      {/* Frame 13: الحاوية الرئيسية العمودية */}
      <div className="frame-13">
        
        {/* Frame 9: حاوية العنوان والفلتر */}
        <div className="header-frame-9">
          <h2 className="projects-title">
            My recent <span className="highlight">works</span>
          </h2>

          {/* Frame 8: حاوية أزرار الفلترة */}
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

        {/* Frame 12: حاوية الكاردات الأفقية */}
        <div className="frame-12">
          {filteredProjects.map((project) => (
            <div key={project.id} className="placeholder-box">
              {/* عرض الصورة فقط إذا كانت موجودة (مثل الكارد الأول) */}
              {project.image ? (
                <div className="card-content-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`project-img-content img-id-${project.id}`} 
                  />
                </div>
              ) : (
                /* مكان مؤقت للكاردات التي لم تضاف صورها بعد */
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