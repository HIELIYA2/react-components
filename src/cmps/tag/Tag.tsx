import React, { MouseEvent } from "react";
import './Tag.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

type props = {
    isDeletable?: boolean;
    value: string;
    onClick(e: MouseEvent<HTMLElement>): void;
}

const Tag: React.FC<props> = ({ isDeletable, value, onClick: handleClick }) => {
    return (
        <section>
            <div className="tag-container">
                <div className="tag-name">{value}</div>
                <button onClick={handleClick} className="tag-x-button" >
                    <FontAwesomeIcon icon="times" />
                </button>
            </div>
        </section>
    )
}

export default Tag;