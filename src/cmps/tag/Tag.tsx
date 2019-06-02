import React from 'react';
import './Tag.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes);

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
                    <FontAwesomeIcon icon="times" />
                </button>
            )}
        </div>
    );
};

export default Tag;
