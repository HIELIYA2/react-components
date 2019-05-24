import React, { Component } from "react";
import './Tags.css';
import Tag from '../tag/Tag';
import { string } from "prop-types";


class Tags extends Component {

    state = {
        tags: []
    }

    remove = () => {
        console.log('button X clicked');
    }

    render() {
            return (
            <section>
                <div className="tags-container">
                    <Tag value="Tag1" isDeletable="true" onClick={this.remove} />
                    <Tag value="Tag2" isDeletable="true" />
                    <Tag value="Tag3" isDeletable="true" />
                    <input type="text"/>
                </div>
            </section>
        )
    }
}
export default Tags;