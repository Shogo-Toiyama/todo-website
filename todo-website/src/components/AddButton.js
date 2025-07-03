import React, { useState } from 'react';
import '../App.css';
import { PlusIcon } from '@heroicons/react/24/solid';

function AddButton({ onAdd }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      className={`add-button ${isHovered ? 'hovered' : ''}`}
      onClick={onAdd}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <PlusIcon className={`w-6 h-6 text-white plus-icon ${isHovered ? 'rotated' : ''}`}/>
    </button>
  );
}

export default AddButton;