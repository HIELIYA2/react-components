import React, { Component } from "react";
import './Tag.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

class Tag extends Component {

    render() {
        return (
            <section>
                <div className="tag-container">
                    <div className="tag-name">{this.props.value}</div>
                    <button onClick={this.props.onClick} className="tag-x-button" >
                        <FontAwesomeIcon icon="times" />
                    </button>
                </div>
            </section>
        )
    }
}
export default Tag;