import React from 'react';
import './Tag.css';

interface Props {
  id: string;
  isDeletable?: boolean;
  value: string;
  onClick: (id: string) => void;
}

const Tag: React.FC<Props> = ({ isDeletable, id, value, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };
  return (
    <div className="tag-container">
      <div className="tag-name">{value}</div>
      {isDeletable && (
        <button onClick={handleClick} className="tag-x-button">
          ×
        </button>
      )}
    </div>
  );
};

export default Tag;
