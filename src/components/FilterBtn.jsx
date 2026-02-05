import React from 'react';

const FilterBtn = ({ label, isActive, onClick }) => {
  return (
    <button 
      className={`filter-btn ${isActive ? 'active' : ''}`} 
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FilterBtn;