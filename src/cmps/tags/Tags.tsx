import React, { Component } from "react";
import './Tags.css';
import Tag from '../tag/Tag';
// eslint-disable-next-line
import { string } from "prop-types";


class Tags extends Component {

    state = {
        tags: [{
            id: 1,
            name: 'tag1'
        }, {
            id: 2,
            name: 'tag2'
        }]
    }

    remove = () => {
        console.log('button X clicked');
    }

    addTag = (event: any) => {
        event.preventDefault();
        // let tag: string = this.refs.tag.value;
        // let id: string = makeId();
        // console.log(this.refs.tag.value);
        // this.setState.
    }

    makeId(): string {
        return 'xxx'
    }

    render() {
        return (
            <section>
                <div className="tags-container">
                    <Tag value="Tag1" isDeletable={true} onClick={this.remove} />
                    <form onSubmit={this.addTag.bind(this)}>
                        <input type="text" ref="tag" placeholder="Enter tag name" />

                    </form>
                    <ul>{this.state.tags.map(tag => <li key={tag}>{tag.name}</li>)}</ul>
                </div>
            </section>
        )
    }
}
export default Tags;