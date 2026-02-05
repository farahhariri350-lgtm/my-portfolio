import React, { useState } from 'react'; // أضفنا useState
import './About.css';
import aboutManSvg from '../assets/about-man.svg'; 
import doodleItems from '../assets/doodle items.png'; 
import musicNote from '../assets/vector-141.svg';
import lightBulb from '../assets/lightbulb.svg';
import arrowDoodle from '../assets/vector-186.svg';

const About = () => {
  // حالة للتحكم في قراءة المزيد
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="about-section" id="about">
      <div className="center-line"></div>
         
      <img src={musicNote} className="doodle-music" alt="music" /> 
      <img src={lightBulb} className="doodle-light" alt="light" />
      <img src={arrowDoodle} className="doodle-arrow" alt="arrow" />

      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About <span>me</span></h2>
          
          {/* أضفنا class "expanded" عند الضغط على الزر */}
          <p className={`about-description ${isExpanded ? 'expanded' : ''}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate 
            libero et velit interdum, ac aliquet odio mattis. Class aptent taciti 
            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Curabitur maccenas massa velit, varius a lacus sed, iaculis interdum risus.
          </p>
          
          <span className="read-more" onClick={toggleReadMore}>
            {isExpanded ? ' Show less' : ' Read more'}
          </span>
        </div>

        <div className="about-visual">
          <img src={doodleItems} className="doodle-bg" alt="Doodles" />
          <div className="man-with-shadow">
            <img src={aboutManSvg} className="about-man-main" alt="Man Illustration" />
            <div className="about-shadow"></div>
          </div>
        </div>
      </div>
     <div className="section-divider"></div>
    </section>
  );
};

export default About;